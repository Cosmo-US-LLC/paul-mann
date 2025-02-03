import { map } from "nanostores"
import { api } from "../api"
import toast from "react-hot-toast"
import { getAccount, signMessage, watchAccount } from "@wagmi/core"
import { getConfig } from "../web3"

/**
 * @typedef {import("../api/api.types").API.User} User
 * @typedef {import("../api/api.types").API.UserStakeData} UserStakeData
 * @typedef {import("../api/api.types").API.Token} Token
 * @typedef {import("../api/api.types").API.LeaderboardEntry} LeaderboardEntry
 * @typedef {import("../api/api.types").API.BonusCode} BonusCode
 * @typedef {import("../api/api.types").API.UserRankData} UserRankData
 * 
 * @typedef {object} UserStoreValue
 * @property {User | null} UserStoreValue.user
 * @property {UserStakeData | null} UserStoreValue.userStakeData
 * @property {Token | null} UserStoreValue.token
 * @property {LeaderboardRank | null} UserStoreValue.leaderboardRank
 * @property {BonusCode | null} UserStoreValue.appliedBonusCode
 * @property {string} UserStoreValue.project
*/

/** @type {UserStoreValue} */
export const defaultUserState = {
	user: null,
	userStakeData: null,
	token: null,
	leaderboardRank: null,
	appliedBonusCode: null,
	project: ""
}

export const $pepeUserState = map({...defaultUserState, project: api.PEPE_PROJECT})
export const $dogeUserState = map({...defaultUserState, project: api.DOGE_PROJECT})
const userStates = [$pepeUserState, $dogeUserState]

document.addEventListener("wagmi-loaded", async () => {
	const { config } = await getConfig()
	watchAccount(config, {
		onChange: (account) => {
			userStates.forEach(($userState) => {
				const { project } = $userState.get()
				const address = account.address
				if (!address) return $userState.set({...defaultUserState, project})
				api.getUser(project, address).then((res) => $userState.setKey("user", res.data))
				api.getUserStakeData(project, address).then((res) => $userState.setKey("userStakeData", res.data))
				api.getUserLeaderboardRank(project, address).then((res) => $userState.setKey("leaderboardRank", res.data))
			})
		}
	})
})

/**
 * @param {import("nanostores").MapStore<UserStoreValue>} $store
 * @param {object} [options]
 * @param {boolean} [options.noToast]
 * @returns {Promise<Token>}
 */
export const getUserToken = async ($store, options = {}) => {
	const { config } = await getConfig()
	const userData = $store.get()
	if (userData.token && new Date(userData.token.expires).getTime() >= Date.now()) return userData.token
	const { address, isConnected } = getAccount(config)
	if (!address || !isConnected) throw "Please connect your wallet"
	const { project } = $store.get()
	const messageRes = await api.getSiweMessage(project, address)
	const promise = signMessage(config, {
		message: messageRes.data.message
	})
	let signedMessage
	if (options.noToast) {
		signedMessage = await promise;
	} else {
		signedMessage = await toast.promise(promise, {
			loading: "Confirm the message signature in your wallet",
			success: "Successfully signed wallet message",
			error: (err) => api.getApiErrorMessage(err, "Error signing message")
		}).catch(() => {
			throw "Error confirming user"
		})
	}
	const validRes = await api.verifySiweMessage(project, address, messageRes.data.message, signedMessage)
	const token = validRes.data.access
	$store.setKey("token", token)
	return token
}

/**
 * @param {import("nanostores").MapStore<UserStoreValue>} $store
 * @returns {Promise<void>}
 */
export const refetchUserStakeData = async ($store) => {
	const { config } = await getConfig()
	const { address, isConnected } = getAccount(config)
	if (!address || !isConnected) throw "Please connect your wallet"
	const { project } = $store.get()
	const res = await api.getUserStakeData(project, address)
	$store.setKey("userStakeData", res.data)
}

/**
 * @param {import("nanostores").MapStore<UserStoreValue>} $store
 * @param {string} newCode 
 * @param {object} [options]
 * @param {boolean} [options.noToast]
 * @returns {Promise<void>}
 */
export const userUpdateReferralCode = async ($store, newCode, options) => {
	const { config } = await getConfig()
	const { address, isConnected } = getAccount(config)
	if (!address || !isConnected) throw "Please connect your wallet"
	const { project } = $store.get()
	const token = await getUserToken($store, options)
	await api.updateReferralCode(project, token.token, address, newCode)
	const res = await api.getUser(project, address)
	$store.setKey("user", res.data)
}

/**
 * @param {import("nanostores").MapStore<UserStoreValue>} $store
 * @returns {Promise<void>}
 */
export const userResetReferralCode = async ($store) => {
	const oldUser = $store.get().user
	console.log("OLD USER", oldUser, $store.get())
	if (!oldUser) return
	$store.setKey("user", {
		...oldUser,
		referred_by: null
	})
}

/**
 * @param {import("nanostores").MapStore<UserStoreValue>} $store
 * @param {string} code
 * @param {object} [options]
 * @param {boolean} [options.noToast]
 * @returns {Promise<void>}
*/
export const userApplyBonusCode = async ($store, code, options) => {
	const { config } = await getConfig()
	const { address, isConnected } = getAccount(config)
	if (!address || !isConnected) throw "Please connect your wallet"
	const { project } = $store.get()
	const token = await getUserToken($store, options)
	const res = await api.applyBonusCode(project, address, code, token.token)
	$store.setKey("appliedBonusCode", res.data)
}

/** @param {import("nanostores").MapStore<UserStoreValue>} $store */
export const resetUserBonusCode = ($store) => {
	return $store.setKey("appliedBonusCode", null)
}