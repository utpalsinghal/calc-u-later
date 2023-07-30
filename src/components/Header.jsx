import React from "react";
import logo from "../images/logo.png";
import { switchMode } from "../redux/calculatorActions";
import { useDispatch, useSelector } from "react-redux";

const Header = (props) => {
	const dispatch = useDispatch();
	const mode = useSelector((state) => state.mode);
	const handleToggle = (type) => {
		dispatch(switchMode(type));
	};

	return (
		<div className='header'>
			<img src={logo} alt='Logo' className='logo' />
			<p className='title'>Calc-U-Later</p>
			<button className='mode-toggle' onClick={(e) => handleToggle("Basic")}>
				Basic
			</button>
			<button className='mode-toggle' onClick={(e) => handleToggle("Scientific")}>
				Scientific
			</button>
		</div>
	);
};

export default Header;
