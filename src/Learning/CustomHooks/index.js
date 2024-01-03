import useAuth from "./useAuth";
import useCounter from "./useCounter"
const CustomHook = ()=>{
    const {count,increment,decrement} = useCounter();
    const isActiveUser =useAuth();
    return <div>
        <h5>Custom Hook Example</h5>
        <h2>Active User :{isActiveUser?"Yes":"No"}</h2>
        <h2>Count: {count}</h2>
        <button onClick={increment}> Increment</button><br/>
        <button onClick={decrement}> Decrement</button>
    </div>
};

export default CustomHook;