import React, {  useReducer, ChangeEvent, FormEvent } from "react";

interface State {
  count: number;
  input: string;
}

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "input"; payload: string };

const UseReducerTestComponet: React.FC = () => {
 
 
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
            return { ...state, count: state.count - 1 };
        case "input":
            return { ...state, input: action.payload}
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, input: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "input", payload: e.target.value });
  };

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };



  return (
    <div>
      <form onSubmit={(e: FormEvent) => e.preventDefault()}>
        <input
          type="text"
          name="input"
          placeholder="Enter Text"
          value={state.input}
          onChange={handleInputChange}
        />
      </form>
      <br />
      <p>{state.count}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button>Color</button>
    </div>
  );
};

export default UseReducerTestComponet;
