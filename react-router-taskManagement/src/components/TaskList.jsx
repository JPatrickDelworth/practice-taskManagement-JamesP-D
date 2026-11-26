import { Link } from 'react-router'


const TaskList = ({taskData}) => {

const display = taskData.map((task) => {
    return <Link key={task.id} to={`/task/${task.id}`} id="t-items">{task.title}</Link>

    }) 
    return (
        <div className="main">
            <h1 className="main">Task List</h1>
            <ul id= "task" className="main">
                <li id= "task" className="t-container">
                        
                        {display}
                        
                </li>
            </ul>
        </div>
    )
}

export default TaskList;