import { useState } from "react";

export const useAppState = (initalValue) => {
  const [state, setState] = useState(initalValue);

  return {
    setValue(value) {
      setState(value);
    },
    value: state,
  };
};
