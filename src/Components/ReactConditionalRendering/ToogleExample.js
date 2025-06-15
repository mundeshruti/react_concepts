import { useState } from 'react';
export default function ToggleExample() {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <h4>Toggle Example</h4>
      <p>
        This example demonstrates how to toggle the visibility of a message using React's state management.
        Clicking the button will show or hide the message.
      </p>
      
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>

      {isVisible && <p>This is a secret message!</p>}
    </>
  );
}