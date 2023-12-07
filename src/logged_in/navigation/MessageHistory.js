// MessageHistory.js
import React, { useState } from 'react';
import { List, ListItem, TextField, Button } from "@mui/material";

const MessageHistory = ({ history }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        // Logic to send message (mock or API call)
        console.log('Sending message:', newMessage);
        setNewMessage('');
    };

    return (
        <div>
            
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

export default MessageHistory;
