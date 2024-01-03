import { useEffect, useRef } from "react";

const UseRef = ()=>{
    const inputRef = useRef(null);
    console.log("Input ref is ",inputRef);

    // This use Effect add focus on input field
    useEffect(()=>{
        // inputRef.current.value = "My name is ravi";
        inputRef.current.focus();
        // inputRef.current will refer to actual input element (DOM element)
        console.log("Reference of input value<><>",inputRef);
    },[]);
    // You can get the input vale without changing the stateVariable but you have to use useRef hook to get value.
    // refer element has all attributes of the actual element, reference is actual DOM not virtual DOM.
    console.log("is component is re-rendering?")

    return <div>
        <h1>Example of useRef hook</h1>
        <input ref={inputRef} type={'text'} />
        {/* Label value would not show anything because component is not re-rendering.Directly DOM is getting updated  */}
        <label>Input Value is :{inputRef &&  inputRef.current && inputRef.current.value}</label>
        <button onClick={()=> alert(inputRef.current.value)}>Click Me</button>
    </div>
};

export default UseRef;