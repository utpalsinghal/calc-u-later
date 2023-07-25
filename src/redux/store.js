import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorReducer";

const store = configureStore({
	reducer: calculatorReducer,
});

export default store;
