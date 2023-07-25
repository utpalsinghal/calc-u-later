import React from "react";
import Calculator from "./Calculator";
import Notes from "./Notes";

const CalculatorWrapper = () => {
	return (
		<div className='main'>
			<Calculator />
			<Notes />
		</div>
	);
};

export default CalculatorWrapper;
