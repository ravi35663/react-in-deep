const Task = ()=>{
    return <h>
        This is first task
    </h>
}



// HOC

const TaskHOC = ({Task})=>{
    // const HOC = Task()
    return ({props})=>{
    <div>  
        This is enhanced tasks
        <Task {...props} />
    </div>};
}