export default function Logical({ unreadMessages = [1,2] }) {
    return (
        <div>
            <h4>Logical AND Operator Example</h4>
            <p>Use the logical AND operator to conditionally render content based on the presence of unread messages.</p>
            <p>Inbox</p>
            {unreadMessages.length > 0 && (
                <p>You have {unreadMessages.length} new messages.</p>
            )}
        </div>
    );
}
