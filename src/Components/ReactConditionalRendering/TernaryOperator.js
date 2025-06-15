import React from 'react'

export default function TernaryOperator({ isLoggedIn }) {
    return (
        <>
            <h4>Ternary Operator Example</h4>
            <p>Use the ternary operator to conditionally render content based on the user's login status.</p>
            <p>{isLoggedIn ? 'Welcome Back!' : 'Please Sign In'}</p>
        </>
    );
}
