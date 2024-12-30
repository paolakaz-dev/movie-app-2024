import { useReducer } from "react";

const initialState = {count: 0};

//                         ⬇ this is what is passed to dispatch
//                 ⬇ this is the current state; return the new state
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'multiply':
        return {count: state.count * action.by}
    default:
      throw new Error();
  }
}

/*
    using the dispatch function

                    ⬇ this can be whatever you want
        dispatch({type: 'decrement'})
*/

/*
    state management libraries
        redux       <- old, widely used, complex
        zustand     <- modern, but still powerful
        jotai       <- easy, minimalistic, simple
*/

function ReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'multiply', by: 5})}>*</button>
    </>
  );
}