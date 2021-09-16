import ListTaskItem from "./list-task-item";
import PropTypes from 'prop-types';

const ListTask = (props) => {

    const tasks = props.tasks;
    console.log(tasks);

    const tasksJSX = tasks.map(
        t => <ListTaskItem key={t.id} {...t} onFinish={props.onFinishTask} />
    );
    console.log(tasksJSX);

    return (
        <>
            <h3>Liste des taches</h3>
            <table>
                <thead>
                    <tr>
                        <th>Tache</th>
                        <th>Desc</th>
                        <th>Fini ?</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksJSX}
                </tbody>
            </table>
        </>
    );
}

ListTask.propTypes = {
    onFinishTask : PropTypes.func.isRequired
}

export default ListTask;