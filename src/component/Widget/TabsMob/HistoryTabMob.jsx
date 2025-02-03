import { useContext, useEffect, useState } from "react";
import historyIcon from "../../../assets/walletsec/btnicns (2).svg";
import { ApiContext } from "../../../presale-gg/context/ApiContext";
import { api } from "../../../presale-gg/api";
import { useStore } from "@nanostores/react";
import { useAccount } from "../../../presale-gg/web3";
import { formatDollar, formatLargeNumber, formatNumber } from "../../../presale-gg/util";
import Toggle from "../../Toggle";

/**
 * @typedef {import("../../../presale-gg/api/api.types").API.TransactionHistoryItem} TransactionHistoryItem
 * @typedef {import("../../../presale-gg/api/api.types").API.BonusTransactionHistoryItem} BonusTransactionHistoryItem
 */

const capitalize = (str) => {
	return str.split(/\s|\_/).map((str) => str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()).join(" ")
}

const HistoryTabMob = () => {
	const projectData = useContext(ApiContext)
	const apiData = useStore(projectData.$apiState)

	const [ isBonus, setIsBonus ] = useState(false)

	/** @type {[(TransactionHistoryItem[] | BonusTransactionHistoryItem[]), (action: import("react").SetStateAction<TransactionHistoryItem[]>) => void]} */
	const [ transactions, setTransactions ] = useState([])
	const [ loading, setLoading ] = useState(false)

	const accountData = useAccount()

	useEffect(() => {
		if (!accountData.address) return setTransactions([])
		setLoading(true)
		setTransactions([])
		const getter = isBonus ? api.getBonusTransactionHistory : api.getTransactionHistory
		getter(apiData.project, accountData.address, 0, 100)
			.then((res) => {
				setTransactions(res.data)
				setLoading(false)
			})
	}, [accountData.address, isBonus])

	const statusColMap = {
		"pending": ["#4f2e1a", "#de7223"],
		"processing": ["#4f2e1a", "#de7223"],
		"completed": ["#142e23", "#20f79b"],
		"failed": ["#731a14", "#de5950"],
		"expired": ["#731a14", "#de5950"],
		"refunded": ["#731a14", "#de5950"],
		"rank": ["#0b3661", "#66aaed"],
		"referral": ["#4f2e1a", "#de7223"],
		"referrer": ["#731a14", "#de5950"],
		"bonus_code": ["#142e23", "#20f79b"]
	}

	return (
		<>
			<h3 className="text-[38.258px] font-[700] text-center leading-[88%] text-[#00]">
				Transactions
			</h3>
			<div className="flex items-center gap-2 self-center text-lg">
				Bonus Transactions
				<Toggle
					checked={isBonus}
					onChange={(newIsBonus) => {
						setIsBonus(newIsBonus)
						setTransactions([])
						setLoading(true)
					}}
				/>
			</div>
			<div className="flex flex-col gap-2 overflow-y-auto flex-1 pr-2 -mr-2">
				{!isBonus ? transactions.map((/** @type {TransactionHistoryItem} */trx, i) => {
					const statusCols = statusColMap[trx.status]
					return (
						<div className="flex items-center bg-[#00000078] text-[#fff] px-2 py-[0.375rem] rounded-lg text-[0.8125rem]" key={i}>
							<p className="text-[#bbb] flex justify-center flex-1">-{formatDollar(trx.payment_usd_amount)}</p>
							<p className="flex justify-center flex-1">+{formatLargeNumber(trx.tokens_bought, 0, 2)} {projectData.symbol}</p>
							<p className="text-[0.625rem] leading-[1] w-[7em] py-[0.375rem] flex-0 flex items-center justify-center rounded-lg" style={{background: statusCols?.[0], color: statusCols?.[1]}}>{capitalize(trx.status ?? "")}</p>
						</div>
					)
				}) : transactions.map((/** @type {BonusTransactionHistoryItem} */trx) => {
					const statusCols = statusColMap[trx.type]
					return (
						<div className="flex items-center bg-[#00000078] text-[#fff] px-2 py-[0.375rem] rounded-lg text-[0.8125rem]" key={i}>
							<p className="flex justify-center flex-1">+{formatLargeNumber(trx.bonus_token_amount, 0, 2)} {projectData.symbol}</p>
							<p className="text-[0.625rem] leading-[1] w-[7em] py-[0.375rem] flex-0 flex items-center justify-center rounded-lg" style={{background: statusCols?.[0], color: statusCols?.[1]}}>{capitalize(trx.type ?? "")}</p>
						</div>
					)
				})}
				{loading && (
					<p className="text-[#444] text-center mt-2 text-lg">Loading ...</p>
				)}
				{transactions.length === 0 && !loading && (
					<p className="text-[#444] text-center mt-2 text-lg">No {isBonus ? "bonus " : ""}transactions found</p>
				)}
			</div>
		</>
	)
}

export default {
	component: HistoryTabMob,
	label: "History",
	icon: historyIcon,
	disabled: ({connected}) => !connected
}