import { useReducer } from "react"

const initialState = {count:0}
/*
    Below state is parameter of argument initialState(as added in useReducer) and {type} is action 
*/
const reducer = (state,{type})=>{
    switch(type){
        case 'increment':{
            return {...state,count:state.count+1}
        }
        case 'decrement':{
            return {...state,count:state.count-1}
        }
        default:{
            return {...state}
        }
    }

}
const UseReducer = ()=>{
    const [state,dispatch] = useReducer(reducer,initialState);

    const increment = ()=>{
        dispatch({type:"increment"})
    }

    const decrement = ()=>{
        dispatch({type:"decrement"})
    }


    return <div>
        <h1>Example of reducer</h1>
        <h2>Count Value: {state.count}</h2>
        <div style={{display:"flex justify-content-between"}}>
            <button style={{backgroundColor:"green","borderRadius":"4px",margin:"2px",padding:"4px"}} onClick={increment}>increment</button>
            <br/><button style={{backgroundColor:"red","borderRadius":"4px",margin:"2px",padding:"4px"}} onClick={decrement}>Decrement</button>
        </div>
    </div>
}

export default UseReducer;


/*
===> 6) UseReducer :-
-> In React, the 'useReducer' Hook is a state management Hook that is used as an alternative to useState 
   when the state logic is complex and involves multiple sub-values or when the next state depends on 
   the previous one. It's particularly useful for managing state in more predictable ways, especially 
   when dealing with complex state transitions.
-> useReducer -> alternative of useState 
-> useReducer is useful if state logic is too complex

=>Complex State Logic:
-> When the state logic becomes complex, especially with multiple sub-values or when the next state 
   depends on the previous state, useReducer can provide a more organized and maintainable solution 
   compared to using multiple useState calls.

=> Predictable State Transitions:
-> useReducer is useful when the state transitions are more predictable and can be expressed as a 
   series of actions. It allows you to update the state based on actions, leading to more explicit and 
   understandable code.

=> Stateful Logic in a Single Place:
-> With useReducer, you can centralize stateful logic in a reducer function, making it easier to 
   manage and reason about the state changes in a single place.

   ** Basic syntax of useReducer:
   const [state, dispatch] = useReducer(reducer, initialState);
   * state: represents the current state.
   * dispatch: is a function used to dispatch actions to update the state.(just like setState)
   * reducer: is a function that takes the current state and an action and returns the new state.
   * initialState: is the initial state of the component.

*/