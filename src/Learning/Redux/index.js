import { createStore } from "redux";

/*
    Action:
        An object that represents an intention to change the state. Actions must have 
        a type property and can have additional data.
*/
// actions
export const increment = ()=>{
    return {type:"increment"};
}
export const decrement = ()=>{
    return {type:"decrement"};
}

/*
    Reducer:
        A function that determines changes to an application's state. It takes the 
        current state and an action as arguments and returns a new state.
*/
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

/*
    Store:
        A central place that holds the application's state. The store is created using the reducer and allows state to be read and updated.
*/
/*
    Reducer: Handles how the state changes based on actions.
    Action: Describes what changes should be made to the state.
    Store: Manages the state and allows interaction with it.
*/
// You can add multiple reducers
// Create store
export const store = createStore(CountReducer);