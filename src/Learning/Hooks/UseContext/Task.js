import  TaskContext  from "./MyContext";
import { useContext } from "react";
const Task = ()=>{
    const {tasks,setTasks} = useContext(TaskContext);
    const topRatedTasks = ()=>{
        const topTasks = tasks.filter(item=> item.rating >=3);
        setTasks(topTasks);
    }
    return <div>
        {tasks && tasks.map(item=>{
            return <h2 key={item.name}>{item.name}</h2>
        })}
        <button onClick={topRatedTasks} style={{backgroundColor:"blue"}}>Top Rated tasks</button>
    </div>

}
export default Task;