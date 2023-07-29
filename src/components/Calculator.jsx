import React from "react";

const Calculator = () => {
	const handleOperand = (e) => {
		alert(e.target.innerText);
		console.log("ehandleOperand", e);
	};
	const handleReset = (e) => {
		alert(e.target.innerText);
		console.log("ehandleReset", e);
	};
	const handleOperator = (e) => {
		alert(e.target.innerText);
		console.log("ehandleOperator", e);
	};
	const handleCalculate = (e) => {
		alert(e.target.innerText);
		console.log("ehandleCalculate", e);
	};
	return (
		<div className='calculator'>
			<div className='formula'>(0.00+0.00)</div>
			<div className='result'>0.00</div>
			<div className='keypad'>
				<div className='row'>
					<div className='col' onClick={handleOperand}>
						<p>{`(`}</p>
					</div>
					<div className='col' onClick={handleOperand}>
						<p>{`)`}</p>
					</div>
					<div className='col' onClick={handleOperator}>
						<p>{`%`}</p>
					</div>
					<div className='col' onClick={handleReset}>
						<p>{`AC`}</p>
					</div>
				</div>
				<div className='row'>
					<div className='col' onClick={handleOperand}>
						<p>{`7`}</p>
					</div>
					<div className='col' onClick={handleOperand}>
						<p>{`8`}</p>
					</div>
					<div className='col' onClick={handleOperand}>
						<p>{`9`}</p>
					</div>
					<div className='col' onClick={handleOperator}>
						<p>{`÷`}</p>
					</div>
				</div>
				<div className='row'>
					<div className='col' onClick={handleOperand}>
						<p>{`4`}</p>
					</div>
					<div className='col' onClick={handleOperand}>
						<p>{`5`}</p>
					</div>
					<div className='col' onClick={handleOperand}>
						<p>{`6`}</p>
					</div>
					<div className='col' onClick={handleOperator}>
						<p>{`x`}</p>
					</div>
				</div>
				<div className='row'>
					<div className='col' onClick={handleOperand}>
						<p>{`1`}</p>
					</div>
					<div className='col' onClick={handleOperand}>
						<p>{`2`}</p>
					</div>
					<div className='col' onClick={handleOperand}>
						<p>{`3`}</p>
					</div>
					<div className='col' onClick={handleOperator}>
						<p>{`-`}</p>
					</div>
				</div>
				<div className='row'>
					<div className='col' onClick={handleOperand}>
						<p>{`0`}</p>
					</div>
					<div className='col' onClick={handleOperand}>
						<p>{`.`}</p>
					</div>
					<div className='col' onClick={handleCalculate}>
						<p>{`=`}</p>
					</div>
					<div className='col' onClick={handleOperator}>
						<p>{`+`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
