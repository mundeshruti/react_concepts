
export default function ReactKey() {
    const users = [
        { id: 101, name: 'Alice' },
        { id: 102, name: 'Bob' },
    ];

    return (
        <div>
            <h2>React Key Example</h2>
            <p>Keys help React identify which items have changed, are added, or are removed.</p>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li> // id is a perfect key
                ))}
            </ul>
        </div>
    )
}
