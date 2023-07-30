import React, { useEffect, useState } from "react";
import { evaluate, round } from "mathjs";

const Calculator = () => {
	const [expression, setExpression] = useState("");
	const [history, setHistory] = useState([]);
	const MAX_HISTORY_LENGTH = 10;

	useEffect(() => {
		let tHistory = [...history];
		if (tHistory.length > MAX_HISTORY_LENGTH) {
			tHistory = tHistory.filter(
				(element, index) => index < MAX_HISTORY_LENGTH
			);
			setHistory(tHistory);
		}
	}, [history]);

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

		try {
			const validation = validateInput();
			if (validation.status === "error") {
				const error = validation;
				throw error;
			} else if (validation.status === "noAction") {
				return;
			}
			let result = evaluate(tempExpression);
			result = round(result, 8).toString();
			const newCalculation = `${expression} = ${result}`;
			let tHistory = [newCalculation, ...history];
			if (result === "0") {
				setExpression("");
			} else {
				setExpression(result);
				setHistory(tHistory);
			}
		} catch (error) {
			if (error.status === "error") {
				alert(error.message);
			} else {
				alert("Invalid Input");
			}
			return;
		}
	};

	const validateInput = () => {
		const areBracketsBalanced = () => {
			let stack = [];
			for (let i = 0; i < expression.length; i++) {
				let element = expression.charAt(i);
				if (element === "(") {
					stack.push(element);
					continue;
				} else if (element === ")") {
					if (stack.length === 0) {
						return false;
					}
					stack.pop();
				}
			}
			if (stack.length === 0) {
				return true;
			} else {
				return false;
			}
		};
		const expressionEndsWithInvalidCharacter = () => {
			const inputValueLen = expression.length;
			const lastInput = expression.charAt(inputValueLen - 1);
			if (
				lastInput === "÷" ||
				lastInput === "x" ||
				lastInput === "-" ||
				lastInput === "+" ||
				lastInput === "."
			) {
				return true;
			} else {
				return false;
			}
		};
		const expressionContainsAnyOperator = () => {
			if (
				expression.indexOf("%") < 0 &&
				expression.indexOf("÷") < 0 &&
				expression.indexOf("x") < 0 &&
				expression.indexOf("+") < 0 &&
				expression.indexOf("-") < 0
			) {
				return false;
			} else {
				return true;
			}
		};

		if (!areBracketsBalanced()) {
			let error = {
				status: "error",
				message: "Brackets are not balanced!\nThanos triggered :(",
			};
			return error;
		}
		if (expressionEndsWithInvalidCharacter()) {
			let error = {
				status: "error",
				message: "Last input cannot be an operator.",
			};
			return error;
		}
		if (!expressionContainsAnyOperator()) {
			let error = {
				status: "noAction",
			};
			return error;
		}
		return { status: "success" };
	};

	return (
		<div className='calculator'>
			<div className='history'>
				<div>
					{history.map((element, key) => {
						return <p>{element}</p>;
					})}
				</div>
			</div>
			<div className='result'>
				<p>{expression === "" ? 0 : expression}</p>
			</div>
			<div className='keypad'>
				<div className='row'>
					<div className='col sec-background' onClick={handleOperand}>
						<p>{`(`}</p>
					</div>
					<div className='col sec-background' onClick={handleOperand}>
						<p>{`)`}</p>
					</div>
					<div className='col sec-background' onClick={handleOperator}>
						<p>{`%`}</p>
					</div>
					<div className='col half accent-background' onClick={handleDelete}>
						<p>{`DEL`}</p>
					</div>
					<div className='col half accent-background' onClick={handleReset}>
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
					<div className='col sec-background' onClick={handleOperator}>
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
					<div className='col sec-background' onClick={handleOperator}>
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
					<div className='col sec-background' onClick={handleOperator}>
						<p>{`-`}</p>
					</div>
				</div>
				<div className='row'>
					<div className='col sec-background' onClick={handleOperand}>
						<p>{`.`}</p>
					</div>
					<div className='col' onClick={handleOperand}>
						<p>{`0`}</p>
					</div>
					<div className='col accent-background' onClick={handleCalculate}>
						<p>{`=`}</p>
					</div>
					<div className='col sec-background' onClick={handleOperator}>
						<p>{`+`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
