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