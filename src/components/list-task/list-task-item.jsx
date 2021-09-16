import PropTypes from 'prop-types';

const ListTaskItem = (props) => {
    const {id, task, desc, isDone} = props;

    return (
        <tr>
            <td>{task}</td>
            <td>{desc}</td>
            <td>{isDone ? 'Oui' : 'En cours'}</td>
            <td>
                {!isDone && (
                    <button onClick={() => props.onFinish(id)}>Terminer</button>
                )}
            </td>
        </tr>
    )
}

ListTaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onFinish: PropTypes.func.isRequired
}

export default ListTaskItem;