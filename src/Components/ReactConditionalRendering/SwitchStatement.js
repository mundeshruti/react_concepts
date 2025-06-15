export default function SwitchStatement({ status }) {
    let content;
    switch (status) {
        case 'loading':
            content = <p>Loading...</p>;
            break;
        case 'success':
            content = <p>Data loaded successfully!</p>;
            break;
        case 'error':
            content = <p>Error loading data.</p>;
            break;
        default:
            content = null;
    }
    return (
        <div>
            <h4>Switch Statement Example</h4>
            <p>Use a switch statement to conditionally render content based on the status of data loading.</p>
            {content}
        </div>
    );
}
