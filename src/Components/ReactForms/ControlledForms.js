import React, { useState } from 'react'

export default function ControlledForms() {
    const [formData, setFormData] = useState({ username: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', formData);
    };

    return (
        <>
            <h2>Controlled Forms</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
