import { map } from "nanostores"

/**
 * @typedef {object} ModalStateValue
 * @property {boolean} ModalStateValue.connectModalOpen
*/

/** @type {ModalStateValue} */
export const defaultModalState = {
	connectModalOpen: false,
}

export const $modalState = map({...defaultModalState})

export const showConnectionModal = async () => {
	$modalState.setKey("connectModalOpen", true)
}

export const closeConnectionModal = async () => {
	$modalState.setKey("connectModalOpen", false)
}