import clsx from "clsx"

/**
 * @param {object} props
 * @param {boolean} props.checked
 * @param {(newVal: boolean) => void} props.onChange
 * @returns {import("react").JSX.Element}
 */
const Toggle = ({ checked, onChange }) => {
	return (
		<button onClick={() => onChange(!checked)} className={clsx(
			"inline-flex relative items-center h-[1.25rem] w-[3.5rem] rounded-full transition-colors",
			{"bg-[#888]": !checked},
			{"bg-[#222]": checked}
		)}>
			<div className={clsx(
				"h-[1.75rem] w-[1.75rem] rounded-full absolute top-1/2 -translate-y-1/2 left-0 transition-all",
				{"bg-[#999]": !checked},
				{"left-full -translate-x-full bg-[#000]": checked}
			)} />
		</button>
	)
}

export default Toggle