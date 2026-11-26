import { useParams, Link } from "react-router";

const TaskDetail = ({taskData}) => {
    const { id } = useParams();
    const task = taskData.find(
        (task) => String(task.id) === id
    );

    if (!task) {
        return (
            <p>Invalid Task ID!</p>
        )
    }
    

    return (
        <div className="main">
            <div id="link-container">
                <Link to={`/`} id="home-link">Home</Link>

            </div>
            <h1 className="main">Task Detail</h1>
            <br />
            <u id="underline"><h2 id="title" className="main">{task.title}</h2></u>
            <ul>
                <li id="description">
                    {task.description}
                </li>
            </ul>
        </div>
    );
};

export default TaskDetail;
        
