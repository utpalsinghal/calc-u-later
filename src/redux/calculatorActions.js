import { SWITCH_MODE } from "./calculatorTypes";

export const switchMode = (mode) => {
  return {
    type: SWITCH_MODE,
    payload: mode,
  };
};