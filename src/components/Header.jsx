import React from "react";
import logo from "../images/logo.png";
import { switchMode } from "../redux/calculatorActions";
import { useDispatch, useSelector } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.mode);

	const handleToggle = () => {
    if(mode === "Standard") {
      dispatch(switchMode("Scientific"));
    } else {
      dispatch(switchMode("Standard"));
    }
	};

	return (
		<div className='header'>
			<img src={logo} alt='Logo' className='logo' />
			<p className='title'>Calc-U-Later</p>
			<button onClick={handleToggle}>{mode}</button>
		</div>
	);
};

export default Header;
