import React, { useCallback, useEffect, useState } from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"
const UseCallback = ()=>{

    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }
   

    const handleChild1 = useCallback(()=>{
        // its will always show the initial value of count because on each re-rendering this function is memoised
        console.log('handleChild1',count);
    },[]);

    const handleChild2 = useCallback(()=>{
        // on each re-render this function is getting created but not getting called unless you called this function
        console.log('Handle child 2',count);
    },[count])

    useEffect(()=>{
        // this will automatically called when count value is changed
        console.log("Count in useEffect ",count);
    },[count]);

    return <div>
        <button onClick={increment} style={{backgroundColor:"green"}}> Toggle </button>
        <Child1 handleChild1={handleChild1}/>
        <Child2 handleChild2={handleChild2}/>
    </div>
}

export default UseCallback;