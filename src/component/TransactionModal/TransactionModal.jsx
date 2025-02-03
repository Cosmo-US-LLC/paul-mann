import { useEffect, useMemo, useState } from "react"
import Modal from "../Modal"
import classes from "./TransactionModal.module.css"
import toast from "react-hot-toast"
import { QRCodeCanvas } from "@akamfoad/qrcode"

/**
 * @param {{transaction: import("../../presale-gg/api/api.types").API.Transaction} & Parameters<import("../Modal/Modal")["default"]>[0]} props
 * @returns 
 */
const TransactionModal = ({ transaction, ...others }) => {
	const [ qrRef, setQrRef ] = useState(null)
	const qrCode = useMemo(() => new QRCodeCanvas(transaction.pay_address), [transaction.pay_address])
	
	useEffect(() => {
		if (!qrRef) return
		qrCode.draw(qrRef)
	}, [transaction.pay_address, qrCode, qrRef])
	
	return (
		<Modal {...others} title="Transaction" className={classes["transaction-modal"]}>
			<div className={classes["payment-details"]}>
				<canvas
					ref={(el) => setQrRef(el)}
					className={classes["qr"]}
					value={transaction.pay_address}
				/>
				<div className={classes["payment-values"]}>
					<NumberValue
						value={transaction.pay_amount}
						label={`Pay amount (${transaction.pay_currency})`}
					/>
					<NumberValue
						value={transaction.payment_id}
						label={`Payment ID`}
					/>
				</div>
			</div>
			{transaction.payin_extra_id && <>
				<NumberValue
					value={transaction.payin_extra_id}
					label="Destination Tag"
				/>
				<p className={classes["hint-text"]}>
					You <span className={classes["bold"]}>must include</span> the destination tag in the transaction or you will not receive your tokens
				</p>
			</>}
			<NumberValue
				value={transaction.pay_address}
				label={`Payment address`}
			/>
			<p className={classes["hint-text"]}>
				Pay <span className={classes["bold"]}>{transaction.pay_amount}</span> of <span className={classes["bold"]}>{transaction.pay_currency.toUpperCase()}</span> on the <span className={classes["bold"]}>{transaction.network.toUpperCase()}</span> network{transaction.payin_extra_id ? <>, with the destination tag of <span className={classes["bold"]}>{transaction.payin_extra_id}</span></> : ""} to the address above to confirm the payment.
			</p>
			<p className={classes["hint-text"]}>
				The tokens will automatically be deposited upon received payment. Note that it can take between 10 minutes and 1 hour for transactions to go through.
			</p>
			<p className={classes["hint-text"]}>
				Refresh the page to check your balance.
			</p>
		</Modal>
	)
}

export default TransactionModal

/**
 * 
 * @param {object} props
 * @param {string | number} props.value
 * @param {string} props.label
 * @returns {import("react").JSX.Element}
 */
export const NumberValue = (props) => {
	const copy = () => {
		try {
			navigator.clipboard.writeText(props.value.toString())
			toast.success("Copied text")
		} catch (err) {
			toast("Error copying text, copy manually")
		}
	}
	return (
		<div className={classes["number-value-container"]}>
			<p className={classes["number-value-label"]}>{props.label}</p>
			<input
				size={0}
				className={classes["number-value-value"]}
				value={props.value}
				onInput={(e) => e.currentTarget.value = props.value.toString()}
				readOnly
			/>
			<button className={classes["number-value-copy"]} onClick={copy}>
				Copy
			</button>
		</div>
	)
}