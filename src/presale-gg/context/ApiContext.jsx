import { createContext, useState } from "react"
import { $dogeApiState, $pepeApiState } from "../stores/api.store"
import { $dogeUserState, $pepeUserState } from "../stores/user.store"

/**
 * @typedef {object} ApiContextValue
 * @property {import("nanostores").MapStore<import("../stores/api.store").ApiStateValue>} $apiState,
 * @property {import("nanostores").MapStore<import("../stores/user.store").UserStoreValue>} $userState,
 * @property {string} ApiContextValue.symbol
 * @property {string} ApiContextValue.project
 */

/** @type {ApiContextValue} */
const defaultState = {
	$apiState: null,
	$userState: null,
	symbol: "",
	project: ""
}

export const ApiContext = createContext(defaultState)

/**
 * @param {object} props
 * @param {"doge" | "pepe"} props.project
 * @param {import("react").JSX.Element | import("react").JSX.Element[]} props.children
 * @param {string} props.symbol
 */
export const ApiContextWrapper = ({ project, children, symbol }) => {
	/** @type {Record<"doge" | "pepe", ApiContextValue>} */
	const value = {
		doge: {
			$apiState: $dogeApiState,
			$userState: $dogeUserState,
			symbol,
			project
		},
		pepe: {
			$apiState: $pepeApiState,
			$userState: $pepeUserState,
			symbol,
			project
		}
	}

	return (
		<ApiContext.Provider value={value[project]}>
			{children}
		</ApiContext.Provider>
	)
}