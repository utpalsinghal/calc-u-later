import React, { useEffect, useState } from "react";
import { evaluate, round } from "mathjs";

const Calculator = () => {
	const [expression, setExpression] = useState("");

	const handleOperand = (e) => {
		const val = e.target.innerText;
		let tempExpression = expression + val;
		setExpression(tempExpression);
	};

	const handleOperator = (e) => {
		const val = e.target.innerText;
		const inputValueLen = expression.length;
		const lastInput = expression.charAt(inputValueLen - 1);
		let tempExpression = "";
		if (
			lastInput === "÷" ||
			lastInput === "x" ||
			lastInput === "-" ||
			lastInput === "+"
		) {
			tempExpression = expression.substring(0, inputValueLen - 1) + val;
		} else {
			tempExpression = expression + val;
		}
		setExpression(tempExpression);
	};

	const handleDelete = (e) => {
		const inputValueLen = expression.length;
		let tempExpression = expression.substring(0, inputValueLen - 1);
		setExpression(tempExpression);
	};

	const handleReset = (e) => {
		setExpression("");
	};

	const handleCalculate = (e) => {
		let tempExpression = expression;
		tempExpression = tempExpression.replace("÷", "/");
		tempExpression = tempExpression.replace("x", "*");
		tempExpression = tempExpression.length === 0 ? "0" : tempExpression;

		let result;

		try {
			if (!areBracketsBalanced()) {
				const error = { message: "Brackets are not balanced!", code: 1 };
				throw error;
			}
			result = evaluate(tempExpression);
		} catch (error) {
			if (error.code === 1) {
				alert(error.message);
			} else {
				alert("Invalid Input");
			}
			return;
		}

		result = round(result, 8).toString();
		if (result === "0") {
			setExpression("");
		} else {
			setExpression(result);
		}
	};

	const areBracketsBalanced = () => {
		let stack = [];
		for (let i = 0; i < expression.length; i++) {
			let element = expression.charAt(i);
			if (element === "(") {
				stack.push(element);
				continue;
			} else if (element === ")") {
				if (stack.length === 0) return false;
				stack.pop();
			}
		}
		if (stack.length === 0) return true;
		else return false;
	};

	return (
		<div className='calculator'>
			<div className='formula'>(0.00+0.00)</div>
			<div className='result'>
				<p>{expression === "" ? 0 : expression}</p>
			</div>
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
					<div className='col half' onClick={handleDelete}>
						<p>{`DEL`}</p>
					</div>
					<div className='col half' onClick={handleReset}>
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
