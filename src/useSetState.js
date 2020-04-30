import { useReducer } from "react";

const useSetState = initialState => {
  const reducer = (state, nextState) => {
    return { ...state, ...nextState };
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const setState = nextState => dispatch(nextState);

  return [state, setState];
};

export default useSetState;
