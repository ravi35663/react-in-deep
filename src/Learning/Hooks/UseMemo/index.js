import { useMemo, useState } from "react";
const heavyCalculation  = (count)=>{
    console.log("heavyCalculation is called");
    return 10 * count;;
}


const UseMemo = ()=>{
    const [count,setCount] = useState(0);
    const increment = ()=> setCount(count+1);
    // It useMemo is not implemented then on each re-render heavyCalculation happens again and again.
    const heavyCalculationMemoized = useMemo(()=>{
        console.log("useMemo without dependencies");
        return heavyCalculation(count);
    },[]);
    
    const heavyCalculationMemoized2 = useMemo(()=>{
        console.log("useMemo with dependencies");
        return heavyCalculation(count);
    },[count]); // value will be update on each change of count value

    console.log("heavyCalculationMemoized ",heavyCalculationMemoized);
    console.log("heavyCalculationMemoized2 ",heavyCalculationMemoized2);


    return <div>
        <h1>Example of useMemo</h1>
        <button style={{backgroundColor:'blue'}} onClick={increment}>Toggle</button>
    </div>
}

export default UseMemo