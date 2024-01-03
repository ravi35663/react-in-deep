import SpecialTask from "./SpecialTask";
import Task from "./Task";

const dummyTasks = [
    {name:"call",rating:8},{name:"Meeting",rating:7},{name:"Proposal",rating:3},{name:"Pitch",rating:5},
    {name:"Scrum",rating:2},{name:"Demo",rating:4},{name:"Gym",rating:6},{name:"Movie",rating:7}]
const HOCTasks = ()=>{
    const SpecialTaskHOC = SpecialTask(Task);
    return <div>
        {dummyTasks.map(item=>{
            return item.rating % 3==0?<SpecialTaskHOC item={item} key={item.name}/>:< Task item={item} key={item.name}/>
        })}
    </div>
};

export default HOCTasks;