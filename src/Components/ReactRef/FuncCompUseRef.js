import { useEffect, useRef } from 'react';
export default function FuncCompUseRef() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <h2>Functional Component with useRef</h2>
            <p>Focus on the input field using useRef.
            {/* Using useRef to manage focus in a functional component */}
            In this example, we create a reference to an input field using <code>useRef</code> and focus on it when the component mounts.</p>
            <input ref={inputRef} />
        </>
    );
}


