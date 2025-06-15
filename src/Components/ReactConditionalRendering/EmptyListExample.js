
export default function EmptyListExample({ tasks = [] }) {
   if (tasks.length === 1) {
        return <p>No tasks available</p>;
    }
    return (
        <div>
            <h4>Empty List Handler Example</h4>
            <p>Use this component to display a message when the list of tasks is empty.</p>
            <ul>
                {tasks.map(task => <li key={task.id}>{task.name}</li>)}
            </ul>
        </div>

    )
}

