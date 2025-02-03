import { useEffect, useState } from "react"
import { parseNum, roundToDP } from "../presale-gg/util"
import arw from "../assets/walletsec/arw.svg";
import clsx from "clsx";

/**
 * @typedef {object} TokenValue
 * @property {number} TokenValue.id
 * @property {string} TokenValue.symbol
 * @property {string} TokenValue.chain
 * @property {string} [TokenValue.imgSrc]
 */

/**
 * @typedef {object} InputRef
 * @property {string} InputRef.valStr
 * @property {(val: number) => unknown} InputRef.setVal
 */

/**
 * @param {object} props
 * @param {string} props.label
 * @param {number} props.defaultValue
 * @param {number} [props.decimals]
 * @param {(ref: InputRef) => void} [props.inputRef]
 * @param {TokenValue | null} props.selectedToken
 * @param {TokenValue[]} [props.tokenOptions]
 * @param {(val: number) => void} props.onChange
 * @param {(token: TokenValue)} props.onTokenChange
 * @returns {import("react").JSX.Element}
 */
const TokenInput = ({ label, onChange, onTokenChange, selectedToken, defaultValue, tokenOptions, inputRef, decimals = 6, ...others }) => {
	const [ valStr, setValStr ] = useState(defaultValue.toString())
	const [ dropdownOpen, setDropdownOpen ] = useState(false)
	const [ typed, setTyped ] = useState(false)

	useEffect(() => {
		if (!typed) setValStr(defaultValue.toString())
	}, [defaultValue])

	const partialNumRegexp = /^((\d+(\.\d*)?)|\d*)$/

	const handleChange = (newVal) => {
		if (!partialNumRegexp.test(newVal)) {
			newVal = valStr
		}
		setValStr(newVal)
		if (!typed) setTyped(true)
		const valNum = roundToDP(parseNum(newVal || "0"), decimals)
		onChange(valNum)
	}

	useEffect(() => {
		inputRef?.({
			valStr,
			setVal: (val) => {
				val = roundToDP(val, decimals)
				onChange(val)
				setValStr(val.toString())
			}
		})
	}, [inputRef])

	return (
		<div {...others} className="bg-[#000] px-4 gap-2 flex relative z-[9] justify-between items-center py-2 rounded-[14px] isolate">
			<div className="flex flex-col flex-1">
				<h5 className="text-[#fff] text-[15.303px] font-[600]">
					{label}
				</h5>
				<input
					type="text"
					className="text-[#fff] text-[18.364px] font-[700] bg-[transparent] outline-none flex-1"
					value={valStr}
					size={1}
					onFocus={(e) => {
						if (valStr === "0") setValStr("")
					}}
					onBlur={(e) => {
						if (valStr === "") setValStr("0")
					}}
					onInput={(e) => handleChange(e.currentTarget.value)}
				/>
			</div>

			{selectedToken && (
				<div className="relative inline-block text-left z-[9] flex-shrink-0">
					<div
						className={clsx(
							"flex items-center justify-between space-x-2 p-2 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A]",
							{["cursor-pointer"]: tokenOptions?.length}
						)}
						onClick={() => setDropdownOpen((prev) => !prev)}
					>
						<div className="flex items-center space-x-2 h-[20px]">
							{selectedToken.imgSrc && (
								<img
									src={selectedToken.imgSrc}
									className="w-[20px] h-[20px] flex-shrink-0"
									alt=""
								/>
							)}
							<h5 className="text-[15.303px] text-[#fff] leading-[80%] font-[400]">
								{selectedToken.symbol.toUpperCase()}&nbsp;({selectedToken.chain})
							</h5>
						</div>
						{tokenOptions && (
							<img
								src={arw}
								className="w-[12px] h-[12px]"
								alt="Arrow Icon"
							/>
						)}
					</div>

					{dropdownOpen && tokenOptions && (
						<div className="absolute mt-2 w-full bg-[#191F1F] rounded-md shadow-lg max-h-60 overflow-y-auto z-[10]">
							{tokenOptions.map((token, index) => (
								<div
									key={index}
									className="flex items-center px-2 py-2 space-x-2 cursor-pointer hover:bg-gray-800"
									onClick={() => {
										setDropdownOpen(false)
										onTokenChange(token)
									}}
								>
									<img
										src={token.imgSrc}
										className="w-[20px] h-[20px] flex-shrink-0"
										alt={`Option ${index + 1}`}
									/>
									<h5 className="text-[12.8px] text-[#fff] font-[400]">
										{token.symbol.toUpperCase()}&nbsp;({token.chain})
									</h5>
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default TokenInput