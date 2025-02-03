import { map } from "nanostores"
import { api } from "../api"

/**
 * @typedef {import("../api/api.types").API} API
 * @typedef {import("../api/api.types").API.Stage} Stage
 * @typedef {import("../api/api.types").API.Info} Info
 * @typedef {import("../api/api.types").API.LeaderboardEntry} LeaderboardEntry
 * @typedef {import("../api/api.types").API.PaymentToken} PaymentToken
 * 
 * @typedef {object} ApiStateValue
 * @property {Stage | null} ApiStateValue.stage
 * @property {boolean} ApiStateValue.stageLoading
 * @property {PaymentToken[] | null} ApiStateValue.paymentTokens
 * @property {boolean} ApiStateValue.paymentTokensLoading
 * @property {boolean} ApiStateValue.presaleEnded
 * @property {LeaderboardEntry[] | null} ApiStateValue.leaderboard
 * @property {Info | null} ApiStateValue.info
 * @property {string} ApiStateValue.project
 */

/** @type {ApiStateValue} */
export const defaultApiState = {
	stage: null,
	stageLoading: true,
	paymentTokens: null,
	paymentTokensLoading: true,
	presaleEnded: false,
	leaderboard: null,
	info: null,
	project: ""
}

export const $pepeApiState = map({...defaultApiState, project: api.PEPE_PROJECT})
export const $dogeApiState = map({...defaultApiState, project: api.DOGE_PROJECT})

const stores = [$pepeApiState, $dogeApiState]

stores.forEach((store) => {
	const { project } = store.get()

	store.setKey("stageLoading", true)
	api.getActiveStage(project).then((res) => {
		if (res.data === null) return store.setKey("presaleEnded", true)
		store.setKey("stage", res.data)
		store.setKey("stageLoading", false)
	}).catch(() => {})

	store.setKey("paymentTokensLoading", true)
	api.getPrices(project).then((res) => {
		store.setKey("paymentTokens", res.data)
		store.setKey("paymentTokensLoading", false)
	})

	api.getLeaderboard(project).then((res) => {
		store.setKey("leaderboard", res.data)
	}).catch(() => {})

	api.getProjectInfo(project).then((res) => {
		store.setKey("info", res.data)
	})
})