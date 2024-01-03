import { createStore } from "redux";

// actions
export const increment = ()=>{
    return {type:"increment"};
}
export const decrement = ()=>{
    return {type:"decrement"};
}


// Reducer
export const CountReducer = (state=0,{type})=>{
    switch(type){
        case "increment":{
            console.log("Increment <>",state);
            return state+1
        }
        case "decrement":{
            console.log("Decrement <>",state);
            return state-1
            
        }
        default:{
            return state;
        }
    }
}


// You can add multiple reducers
// Create store
export const store = createStore(CountReducer);