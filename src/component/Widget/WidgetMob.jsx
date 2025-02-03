import { ApiContextWrapper } from "../../presale-gg/context/ApiContext"

import BuyTabMob from "./TabsMob/BuyTabMob"
import StakeTabMob from "./TabsMob/StakeTabMob"
import HistoryTabMob from "./TabsMob/HistoryTabMob"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { useAccount } from "../../presale-gg/web3"

const tabs = [BuyTabMob, HistoryTabMob]
// const tabs = [BuyTabMob, StakeTabMob, HistoryTabMob]
// const tabs = [BuyTab, StakeTab, HistoryTab]

/**
 * @param {object} props 
 * @param {"doge" | "pepe"} props.project
 * @param {object} props.theme
 * @param {string} props.theme.bg
 * @param {string} props.symbol
 * @returns 
 */
const WidgetMob = ({ project, theme, symbol, ...others }) => {
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
			className={clsx("max-w-[272.31px] bg-[var(--bg)] w-[100%] flex flex-col justify-between gap-[4px] px-[13px] pb-[15px] pt-[15px] rounded-[13px] border border-[#fff]", others.className)}
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
									"w-[163.8px] rounded-[30px] py-[2px] space-x-2 flex justify-center items-center border text-[#000]",
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
								<img src={tab.icon} alt="" className="h-[11px]" aria-hidden />
								<p className={clsx("text-[11px] font-[700]")}>
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

export default WidgetMob