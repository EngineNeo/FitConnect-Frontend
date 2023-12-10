import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { List, ListItem, TextField, Button } from "@mui/material";

const MessageHistory = ({ history, onBack }) => { // Include onBack in the function arguments
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        // Logic to send message (mock or API call)
        console.log('Sending message:', newMessage);
        setNewMessage('');
    };

    return (
        <div>
            <Button onClick={onBack}>Back to Users</Button> {/* Use onBack here */}
            <List>
                {history.map((message, index) => (
                    <ListItem key={index}>
                        <b>{message.sender}:</b> {message.text}
                    </ListItem>
                ))}
            </List>
            <TextField 
                value={newMessage} 
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
                fullWidth
                margin="normal"
            />
            <Button onClick={handleSendMessage} variant="contained" color="primary">
                Send
            </Button>
        </div>
    );
};

MessageHistory.propTypes = {
    history: PropTypes.array.isRequired, // Use PropTypes for type checking
    onBack: PropTypes.func.isRequired, // Define PropTypes for onBack
};

export default MessageHistory;
