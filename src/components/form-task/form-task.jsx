import { useState } from "react";
import PropTypes from 'prop-types';

const FormTask = (props) => {

    const [task, setTask] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) =>  {
        e.preventDefault();

        const data = {
            task,
            desc
        }
        props.onNewTask(data);

        setTask('');
        setDesc('');
    };

    return (
        <>
            <h3>Ajouter une nouvelle tache</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task">Nom : </label>
                    <input id="task" type="text"
                        value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="desc">Description : </label>
                    <input id="desc" type="text"
                        value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </>
    );
}

FormTask.propTypes = {
    onNewTask: PropTypes.func.isRequired
}

// FormTask.defaultProps = {
//     onNewTask: () => {}
// }

export default FormTask;