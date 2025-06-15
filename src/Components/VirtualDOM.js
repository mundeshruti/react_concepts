import { useState } from 'react';

export default function VirtualDOM() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>Virtual DOM</h2>
            <p>
                React uses a virtual DOM to optimize rendering performance.
                It updates only the parts of the DOM that have changed,
                minimizing direct manipulation of the actual DOM.
                This example demonstrates how React efficiently updates the UI
                by re-rendering only the necessary components when state changes.
                Counter Example:
            </p>

            <div>
                <h2>{count}</h2>
                <button onClick={() => setCount(count + 1)}>Add </button> 
                <button onClick={() => setCount(count - 1)} style={{marginLeft:10}}>Remove </button>
            </div>
        </>
    )
}
