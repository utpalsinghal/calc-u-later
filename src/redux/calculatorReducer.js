import { SWITCH_MODE } from "./calculatorTypes";

const initialState = {
	mode: "Basic",
	displayValue: 0,
	history: "",
};

const simpleCalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_MODE:
			return { ...state, mode: action.payload };
		default:
			return state;
	}
};

export default simpleCalReducer;
