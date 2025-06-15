import React, { Fragment } from 'react'

export default function FragmentRendering() {
    return (
        <Fragment>
            <h2>Fragment Rendering Example</h2>
            <p>Fragments allow you to group multiple elements without adding extra nodes to the DOM.</p>
            <p>Title - Description</p>
        </Fragment>
    );
}
