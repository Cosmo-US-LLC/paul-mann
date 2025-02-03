import { useStore } from "@nanostores/react"
import classes from "./ConnectWalletModal.module.css"
import { $modalState, closeConnectionModal } from "../../presale-gg/stores"
import clsx from "clsx"
import { connections, getConfig } from "../../presale-gg/web3"
import { connect } from "@wagmi/core"
import Modal from "../Modal"

const ConnectWalletModal = () => {
	const modalState = useStore($modalState)
	const open = modalState.connectModalOpen

	return (
		<Modal open={open} onClose={closeConnectionModal} title="Connect Wallet">
			<div className={classes["button-list"]}>
				{connections.filter((conn) => !conn.hide || conn.hide() === false).map((connection) => (
					<button
						key={connection.key}
						className={classes["connection-button"]}
						onClick={async () => {
							const { config, walletConnectModal } = await getConfig()
							if (connection.key === "walletconnect") {
								walletConnectModal.open()
							} else {
								connect(config, {connector: config.connectors[connection.connectorIndex]})
							}
							closeConnectionModal()
						}}
					>
						<img
							className={classes["connection-icon"]}
							src={connection.icon}
							alt=""
							aria-hidden
						/>
						{connection.label}
					</button>
				))}
			</div>
		</Modal>
	)
}

export default ConnectWalletModal