import { createContext, use, useContext, useState } from "react";

// Example context:
const UserContext = createContext({user:{name:"Ravi",id:10}});

const ContextExample = ()=>{
    const [user,setUser] = useState({name:"Amit",id:2});
    return (
        <UserContext.Provider value={{user,setUser}}>
            <User />
        </UserContext.Provider>
    )
}


const User = ()=>{
    const {user} = useContext(UserContext);
    return (
        <div>
            <div> User Id: {user.id}</div>
            <div>User Name: {user.name}</div>
        </div>
    )
}