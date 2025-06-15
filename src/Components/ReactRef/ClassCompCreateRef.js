import React, { Component } from 'react';

export default class ClassCompCreateRef extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        this.myRef.current.focus();
    }
    render() {
        return (
            <>
                <h2>Class Component with createRef</h2>
                <p>Focus on the input field using createRef.
                {/* Using createRef to manage focus in a class component */}
                In this example, we create a reference to an input field using <code>createRef</code> and focus on it when the component mounts.</p>
                <input ref={this.myRef} />
            </>
        );
    }
}

