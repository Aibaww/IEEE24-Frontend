import React from "react";
import { useState, useEffect, useRef } from "react";
import '../Assets/dropdown-menu.css'

function DropdownMenu() {
	const [open, setOpen] = useState(false);

	let menuRef = useRef();

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<div>
			<div className="menu-container" ref={menuRef}>
				<div
					className="menu-trigger"
					onClick={() => {
						setOpen(!open);
					}}
				>
					<button> menu </button>
				</div>

				<div
					className={`dropdown-menu ${open ? "active" : "inactive"}`}
				>
					<ul>
						<DropdownItem text={"Log In"} />
						<DropdownItem text={"Settings"} />
					</ul>
				</div>
			</div>
		</div>
	);
}

function DropdownItem(props) {
	return (
		<li className="dropdownItem">
			<a> {props.text} </a>
		</li>
	);
}

export default DropdownMenu;
