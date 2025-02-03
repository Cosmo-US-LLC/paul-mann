import { ApiContextWrapper } from "../../presale-gg/context/ApiContext"

import BuyTab from "./Tabs/BuyTab"
import StakeTab from "./Tabs/StakeTab"
import HistoryTab from "./Tabs/HistoryTab"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { useAccount } from "../../presale-gg/web3"

const tabs = [BuyTab, HistoryTab]

/**
 * @param {object} props 
 * @param {"doge" | "pepe"} props.project
 * @param {object} props.theme
 * @param {string} props.theme.bg
 * @param {string} props.symbol
 * @returns 
 */
const Widget = ({ project, theme, symbol, ...others }) => {
	const [ selectedTabIndex, setSelectedTabIndex ] = useState(0)
	const Comp = tabs[selectedTabIndex].component
	const accountData = useAccount()

	useEffect(() => {
		const disabled = tabs[selectedTabIndex].disabled?.({connected: accountData.isConnected}) ?? false
		if (disabled) setSelectedTabIndex(0)
	}, [selectedTabIndex, accountData.isConnected])

	return (
		<ApiContextWrapper project={project} symbol={symbol}>
			<div
				{...others}
				className={clsx("h-[596px] max-w-[404.01px] bg-[var(--bg)] w-[100%] flex flex-col justify-between gap-[9px] px-[16px] pb-[26px] pt-[24px] rounded-[24px] border border-[#fff]", others.className)}
				style={{
					"--bg": theme.bg,
					...others.style
				}}
			>
				<div className="bg-[#00000040] flex justify-between p-1 rounded-[30px]">
					{tabs.map((tab, i) => {
						const selected = i === selectedTabIndex
						const disabled = tab.disabled?.({connected: accountData.isConnected}) ?? false
						return (
							<button
								className={clsx(
									"w-[204.8px] rounded-[30px] py-[2px] space-x-2 flex justify-center items-center border text-[#000]",
									{"border-transparent": !selected},
									{"bg-[var(--bg)] border-black": selected},
									{"cursor-pointer": !disabled},
									{"text-[#333] cursor-not-allowed": disabled}
								)}
								onClick={() => {
									if (disabled) return
									setSelectedTabIndex(i)
								}}
								key={i}
								title={disabled ? "Connect your wallet" : undefined}
								disabled={disabled}
							>
								<img src={tab.icon} alt="" aria-hidden />
								<p className={clsx("text-[18.364px] font-[700]")}>
									{tab.label}
								</p>
							</button>
						)
					})}
				</div>
				<Comp />
			</div>
		</ApiContextWrapper>
	)
}

export default Widget