import walletConnectImg from "../assets/img/wallet-connect.svg"
import metamaskImg from "../assets/img/metamask.png"
import coinbaseImg from "../assets/img/coinbase.svg"

/**
 * @typedef {"metamask" | "walletconnect" | "coinbase"} SupportedConnection
 * @typedef {1 | 56} SupportedChainId
 * 
 * @typedef {object} Connection
 * @property {string} Connection.label
 * @property {SupportedConnection} Connection.key
 * @property {string} Connection.icon
 * @property {number} Connection.connectorIndex,
 * @property {() => boolean} [hide]
 */

/** @type {Promise<import("./connections")> | undefined} */
let configPromise = undefined

/**
 * @typedef {object} ConfigRef
 * @property {Promise<import("./connections")> | undefined} ConfigRef.current
 */

/** @type {ConfigRef} */
export let configRef = {current: undefined}

/** @returns {Promise<import("./connections")>} */
export const getConfig = async () => {
	if (configRef.current) return configRef.current
	if (!configPromise) configPromise = import("./connections")
	const res = await configPromise
	configRef.current = res
	document.dispatchEvent(new Event("wagmi-loaded"))
	getPublicClient()
	return res
}

/** @type {Promise<import("./public-client")> | undefined} */
let publicClientPromise = undefined

/**
 * @typedef {object} PublicClientRef
 * @property {Promise<import("viem").PublicClient> | undefined} PublicClientRef.current
 */

/** @type {PublicClientRef} */
export let publicClientRef = {current: undefined}

/** @returns {Promise<import("viem").PublicClient>} */
export const getPublicClient = async () => {
	if (publicClientRef.current) return publicClientRef.current
	if (!publicClientPromise) publicClientPromise = import("./public-client")
	const res = await publicClientPromise
	const client = res.getPublicClient()
	publicClientRef.current = client
	return client
}

/**
 * @type {Connection[]}
 */
export const connections = [
	{
		label: "Metamask",
		key: "metamask",
		icon: metamaskImg,
		connectorIndex: 0,
		hide: () => !window.ethereum || !window.ethereum.isMetaMask
	},
	{
		label: "Wallet Connect",
		key: "walletconnect",
		icon: walletConnectImg,
		connectorIndex: 1
	},
	{
		label: "Coinbase",
		key: "coinbase",
		icon: coinbaseImg,
		connectorIndex: 2
	}
]

if (localStorage.getItem("connect-wallet-id-v2")) {
	getConfig().then(({ loadStoredConnection }) => {
		loadStoredConnection()
	})
}