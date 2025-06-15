import React from 'react'

export default function IfElse({ role }) {
    let content;
    if (role === 'admin') {
        content = <p>Welcome Admin</p>;
    } else if (role === 'user') {
        content = <p>Welcome User</p>;
    } else {
        content = <p>Welcome Guest</p>;
    }

    return (
        <>
            <h4>If-Else Conditional Rendering Example</h4>
            <p>This example demonstrates how to conditionally render content based on the user's role.</p>
            <p>Role: {role} Based on the role, the content will change accordingly.</p>
            {content}
        </>
    );
}
