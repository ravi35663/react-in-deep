import { useState } from "react";

// Create custom hook
const useCounter = ()=>{
    const [count,setCount] = useState(0);
    const increment = () => setCount( count + 1);
    const decrement = () => setCount(count - 1);
    return {increment,decrement, count}  
}
const Test = ()=>{
    const {count,increment,decrement} = useCounter();
    return (
    <div>
        <h1>This is test section</h1>
        <div>
            <label>Count is: {count}</label><br/>
            <button onClick={increment}>Increment</button><br/>
            <button onClick={decrement}>Decrement</button>
        </div>
    </div>
)
}

export default Test;