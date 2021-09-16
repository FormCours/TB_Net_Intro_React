import { useState } from "react";
import { nanoid } from "nanoid";
import FormTask from "../../components/form-task/form-task";
import ListTask from "../../components/list-task/list-task";

const TodoApp = (props) => {

    const [tasks, setTasks] = useState([]);

    const createTask = (data) => {
        const newTask = {
            id: nanoid(),
            ...data,
            isDone: false
        };

        // setTasks(tasks.concat(newTask));
        setTasks( [...tasks, newTask] );
    }

    const finishTask = (id) => {
        setTasks(tasks => 
            tasks.map(t => t.id !== id ? t : {...t, isDone: true})
        );
    }

    return (
        <div>
            <FormTask onNewTask={createTask} />
            <ListTask tasks={tasks} onFinishTask={finishTask} />
        </div>
    )
}

export default TodoApp;