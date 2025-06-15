import React from "react";

// function PassingProps() {
//     const message = "Hello, JSX works!";
//     return <h1>{message}</h1>;
// }
const Welcome = (props) => {
  return <div>{props.children}</div>;
};

const PassingProps = () => {
  return (
    <>
      <h2>Passing Props Example</h2>
      <p>Props are used to pass data from parent to child components in React.</p>
      In this example, we define a <code>Welcome</code> component that accepts children as props and renders them inside a <code>div</code>.
      <Welcome>
        <p>Hello, World!</p>
        <p>Welcome to React.</p>
      </Welcome>
    </>
  );
};
export default PassingProps;