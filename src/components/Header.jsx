import React from "react";
import logo from "../images/logo.png";
import { switchMode } from "../redux/calculatorActions";
import { connect, useDispatch, useSelector } from "react-redux";

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

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleToggle: (mode) => dispatch(switchMode(mode)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
