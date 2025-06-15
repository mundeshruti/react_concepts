import React from 'react'
import { useRef } from 'react';

export default function UncontrolledForms() {
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Value: ' + inputRef.current.value);
    };
    return (
        <>
            <h2>Uncontrolled Forms</h2>
            <p>Use useRef to access the input value without state management.</p>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" />
                <button type="submit">Submit</button>
            </form>
        </>
    );

}
