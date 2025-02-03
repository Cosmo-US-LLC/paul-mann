import { createPortal } from "react-dom"
import clsx from "clsx"
import classes from "./Modal.module.css"

/**
 * 
 * @param {object} props 
 * @param {boolean} props.open
 * @param {() => void} props.onClose
 * @param {string} [props.title]
 * @returns {import("react/jsx-runtime").JSX.Element}
 */
const Modal = ({ open, onClose, title, children, ...others }) => {
	return (
		createPortal((
			<div className={clsx(classes["modal-container"], {[classes["open"]]: open})}>
				<div className={classes["backdrop"]} onClick={onClose} />
				<div {...others} className={clsx(classes["modal"], others.className)}>
					{title && <h1 className={classes["title"]}>{title}</h1>}
					{children}
				</div>				
			</div>
		), document.getElementById("modals"))
	)
}

export default Modal