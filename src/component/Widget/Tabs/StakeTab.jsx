import { useContext, useState } from "react";
import stakeIcon from "../../../assets/walletsec/btnicns (1).svg";
import { ApiContext } from "../../../presale-gg/context/ApiContext";
import { formatNumber, parseNum } from "../../../presale-gg/util";
import { useStore } from "@nanostores/react";
import clsx from "clsx";
import Decimal from "decimal.js";
import { useAccount } from "../../../presale-gg/web3";
import toast from "react-hot-toast";
import { api } from "../../../presale-gg/api";
import { getUserToken, refetchUserStakeData } from "../../../presale-gg/stores";

const StakeTab = () => {
	const projectData = useContext(ApiContext)
	const userData = useStore(projectData.$userState)
	const apiData = useStore(projectData.$apiState)

	const [ inputVal, setInputVal ] = useState(new Decimal(0))
	const [ inputValStr, setInputValStr ] = useState(inputVal.toString())

	const [ stakeLoading, setStakeLoading ] = useState(false)
	const [ unstakeLoading, setUnstakeLoading ] = useState(false)

	const partialNumRegexp = /^((\d+(\.\d*)?)|\d*)$/
	const accountData = useAccount()

	const stake = async () => {
		const address = accountData.address
		if (!address || !accountData.isConnected) return
		if (stakeLoading || unstakeLoading) return
		setStakeLoading(true)
		try {
			await toast.promise((async () => {
				const token = await getUserToken(projectData.$userState, {noToast: true})
				await api.stakeTokens(apiData.project, address, inputVal.toNumber(), token.token)
				await refetchUserStakeData(projectData.$userState)
			})(), {
				loading: "Staking tokens",
				error: (err) => api.getApiErrorMessage(err, "Error staking tokens"),
				success: "Successfully staked tokens"
			})
		} catch (err) {}
		setStakeLoading(false)
	}

	const unstake = async () => {
		const address = accountData.address
		if (!address || !accountData.isConnected) return
		if (stakeLoading || unstakeLoading) return
		setUnstakeLoading(true)
		try {
			await toast.promise((async () => {
				const token = await getUserToken(projectData.$userState, {noToast: true})
				await api.unstakeTokens(apiData.project, address, inputVal.toNumber(), token.token)
				await refetchUserStakeData(projectData.$userState)
			})(), {
				loading: "Unstaking tokens",
				error: (err) => api.getApiErrorMessage(err, "Error unstaking tokens"),
				success: "Successfully unstaked tokens"
			})
		} catch (err) {}
		setUnstakeLoading(false)
	}

	return (
		<>
			<h3 className="text-[38.258px] font-[700] text-center leading-[88%] text-[#00] my-auto">
				Stake ${projectData.symbol}
			</h3>
			<div className="grid grid-cols-2 gap-2 my-auto" style={{gridTemplateAreas: '"one two" "three three"'}}>
				{[
					{label: "Currently Staked", value: `${formatNumber(parseNum(userData.userStakeData?.total_staked), 0, 2)} ${projectData.symbol}`},
					{label: "Daily Interest", value: `${formatNumber(parseNum(userData.userStakeData?.daily_interest), 0, 2)} ${projectData.symbol}`},
					{label: "Total Earnings", value: `${formatNumber(parseNum(userData.userStakeData?.total_earnings), 0, 2)} ${projectData.symbol}`},
				].map(({label, value}, i) => (
					<div
						className="bg-[#00000078] text-[#fff] flex flex-col text-center rounded-xl px-2 py-4"
						style={{gridArea: ["one", "two", "three"][i]}}
					>
						<p className="text-[15px] font-bold">{value}</p>
						<p className="text-[11px] leading-[1.2]">{label}</p>
					</div>
				))}
			</div>
			<div className="flex flex-col gap-1 my-auto">
				<div className="flex justify-between text-sm font-[500]">
					<span className="text-[#444]">Available to Stake</span>
					<span>{formatNumber(parseNum(userData.userStakeData?.total_can_stake))} {projectData.symbol}</span>
				</div>
				<input
					size={1}
					className="bg-[#00000078] text-[#fff] rounded-xl p-4 outline-none border-none text-[18px] font-bold"
					value={inputValStr}
					onFocus={(e) => {
						if (e.currentTarget.value === "0") e.currentTarget.value = ""
					}}
					onBlur={(e) => {
						if (e.currentTarget.value === "") e.currentTarget.value = "0"
					}}
					onInput={(e) => {
						let newVal = e.currentTarget.value
						if (!partialNumRegexp.test(newVal)) {
							newVal = inputVal.toString()
						}
						setInputValStr(newVal)
						setInputVal(new Decimal(newVal))
					}}
				/>
				<div className="flex justify-between">
					<button
						className="bg-[#00000078] text-[#fff] text-[12px] py-1 px-2 rounded-lg self-end transition-colors hover:bg-[#00000099]"
						onClick={() => {
							setInputValStr(userData.userStakeData?.total_can_stake ?? "0")
							setInputVal(new Decimal(userData.userStakeData?.total_can_stake ?? "0"))
						}}
					>
						Max Stake ({formatNumber(parseNum(userData.userStakeData?.total_can_stake), 0, 2)})
					</button>
					<button
						className="bg-[#00000078] text-[#fff] text-[12px] py-1 px-2 rounded-lg self-end transition-colors hover:bg-[#00000099]"
						onClick={() => {
							setInputValStr(userData.userStakeData?.total_staked ?? "0")
							setInputVal(new Decimal(userData.userStakeData?.total_staked ?? "0"))
						}}
					>
						Max Unstake ({formatNumber(parseNum(userData.userStakeData?.total_staked), 0, 2)})
					</button>
				</div>
			</div>
			<div className="flex gap-2 my-auto">
				<button
					className={clsx(
						"bg-[#000] text-[#FFF] w-[100%] h-[41.319px] text-[21.425px] font-[700] rounded-[50px] transition-all duration-300 hover:bg-[#0184E2] hover:text-[#FFFFFF] hover:opacity-90 cursor-pointer",
						{"bg-[#888]": stakeLoading}
					)}
					onClick={stake}
				>
					Stake
				</button>
				<button
					className={clsx(
						"bg-[#000] text-[#FFF] w-[100%] h-[41.319px] text-[21.425px] font-[700] rounded-[50px] transition-all duration-300 hover:bg-[#0184E2] hover:text-[#FFFFFF] hover:opacity-90 cursor-pointer",
						{"bg-[#888]": unstakeLoading}
					)}
					onClick={unstake}
				>
					Unstake
				</button>
			</div>
		</>
	)
}

export default {
	component: StakeTab,
	label: "Stake",
	icon: stakeIcon,
	disabled: ({connected}) => !connected
}