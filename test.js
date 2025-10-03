const { useState, useEffect } = require("react")

const person = ()=>{
    const [name,setName] = useState(null);
    useEffect(()=>{
        setName("Ravi")
        return ()=> {
            setName(null);
        }
    },[])
    return (
        <div>
            My name is: {name}
        </div>
    )
}
export default person;