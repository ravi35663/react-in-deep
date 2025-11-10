// Redux example:

import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

export const increment = ()=>{
    return {type:"increment"};
}

export const decrement = ()=>{
    return {type:"decrement"};
}

const initialState = {count:0}
function reducer(state=initialState,{type}){
    switch(type){
        case 'increment':{
            return {...state,count:state.count+1};
        }
        case 'decrement':{
            return {...state,count:state.count-1};
        }
        default:{
            return state
        }
    }
}
/// Create store
const UserStore = createStore(reducer);



const app = ()=>{
    <Provider store={UserStore}>
        <Test />
    </Provider>
}

const Test = ()=>{
    const dispatch = useDispatch();
    const state = useSelector(state=>{
        return state.count;
    })

    const increment = ()=>{
        dispatch.increment();
    }
    const decrement = ()=>{
        dispatch.decrement();
    }
}