

import { http, connect, watchConnections, watchAccount } from "@wagmi/core"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import { coinbaseWallet, walletConnect, mock, metaMask } from "@wagmi/connectors"
import { mainnet, bsc } from "@reown/appkit/networks"
import { createAppKit } from "@reown/appkit"
import { WALLET_CONNECT_PROJECT_ID } from "../constants"

const metadata = {
	name: "Doge vs Pepe",
	description: "Doge vs Pepe",
	url: window.location.origin,
	icons: [`${window.location.origin}/favicon.png`],
}

// Mock the connector for builds
export const metaMaskConnector = metaMask()
export const walletConnectConnector = walletConnect({
	projectId: WALLET_CONNECT_PROJECT_ID,
	name: "Doge vs Pepe",
	metadata,
	qrModalOptions: {
		themeMode: "dark",
		desktopWallets: [],
	},
	showQrModal: false
})
export const coinbaseConnector = coinbaseWallet({
	appName: "Doge vs Pepe",
	appLogoUrl: `${window.location.origin}/favicon.png`,
})
const connectors = [metaMaskConnector, walletConnectConnector, coinbaseConnector]

// Without this, if you refresh while connected to metamask, you can't disconnect
if (typeof localStorage !== "undefined") localStorage.removeItem("wagmi.store")

export const wagmiAdapter = new WagmiAdapter({
	transports: {
		[mainnet.id]: http(),
		[bsc.id]: http(),
	},
	connectors,
	networks: [mainnet, bsc],
	chains: [mainnet, bsc],
	projectId: WALLET_CONNECT_PROJECT_ID,
})

export const walletConnectModal = createAppKit({
	adapters: [wagmiAdapter],
	projectId: WALLET_CONNECT_PROJECT_ID,
	networks: [mainnet, bsc],
	metadata,
	themeMode: "dark"
})

export const config = wagmiAdapter.wagmiConfig

const localWalletConnectedKey = "connect-wallet-id-v2"

export const loadStoredConnection = () => {
	const connectedConnection = localStorage.getItem(localWalletConnectedKey)
	if (!connectedConnection) return
	const connector = config.connectors.find((conn) => conn.id === connectedConnection)
	if (!connector) return
	connect(config, {
		connector
	})
}

watchConnections(config, {
	onChange: (connections) => {
		if (connections.length === 0) {
			localStorage.removeItem(localWalletConnectedKey)
		} else {
			localStorage.setItem(localWalletConnectedKey, connections[0].connector.id)
		}
	}
})

watchAccount(config, {
	onChange: (accounts) => {
		if (!accounts.isConnected) {
			localStorage.removeItem(localWalletConnectedKey)
		}
	}
})