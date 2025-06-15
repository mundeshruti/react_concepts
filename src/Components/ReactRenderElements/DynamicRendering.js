import React, { useState } from 'react'

export default function DynamicRendering() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Dynamic Rendering</h2>
            <p>
                This example demonstrates dynamic rendering in React. The component updates the UI based on the state.
                Clicking the button increments the count, showcasing how React re-renders components efficiently.
            </p>
            <h4>You clicked {count} times</h4>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </>
    );
}
