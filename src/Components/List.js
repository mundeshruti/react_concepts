
export default function List() {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const users = [
        { id: 1, name: 'shruti', age: 30 },
        { id: 2, name: 'Shruu', age: 25 },
        { id: 3, name: 'shrutika', age: 35 },
    ];
    return (
        <>
            <div>
                <h4>List</h4>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <ul>
                {users.map((user) => (
                    user.age > 30 ? (
                        <li key={user.id}>{user.name} is over 30 years old</li>
                    ) : (
                        <li key={user.id}>{user.name} is under 30 years old</li>
                    )
                ))}
            </ul>
        </>
    );
}