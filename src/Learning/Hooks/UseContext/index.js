import React,{ useState } from "react"
import  TaskContext  from "./MyContext"
import Task from "./Task"
const dummyTasks = [{name:"task 1",rating:1},{name:"task 2",rating:2},{name:"task 3",rating:3},{name:"task 4",rating:4}]
const Tasks = ()=>{
    const [isActive,setIsActive] = useState(true);
    const [tasks,setTasks] = useState(dummyTasks);
    return <TaskContext.Provider value={{isActive,setIsActive,tasks,setTasks}}>
        {/* Task context is accessible to all its children components */}
        <Task />
    </TaskContext.Provider>
}

export default Tasks;

/*
    // 1. Create a context
    import React, { createContext, useContext } from 'react';

    const MyContext = createContext();

    // 2. Create a provider (can be a higher-level component or part of your app structure)
    const MyProvider = ({ children }) => {
    const sharedValue = 'This is the shared value';
    return <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>;
    };

    // 3. Use the context in a component
    const MyComponent = () => {
    const contextValue = useContext(MyContext);

    return <div>{contextValue}</div>;
    };

    // 4. Wrap your app (or a part of it) with the provider
    const App = () => {
    return (
        <MyProvider>
        <MyComponent />
        </MyProvider>
    );
    };
*/