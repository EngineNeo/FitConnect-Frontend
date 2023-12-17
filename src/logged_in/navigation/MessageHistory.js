import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, TextField, Button } from "@mui/material";

const MessageHistory = ({ history, setHistory, onBack, senderId, recipientId }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        console.log("Sender ID:", senderId, "Recipient ID:", recipientId, "Message:", newMessage);
        if(newMessage.trim() === "") {
            console.error('Empty message cannot be sent');
            return;
        }
        
        fetch('http://localhost:8000/fitConnect/create_message/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sender_id: senderId,
                recipient_id: recipientId,
                message_text: newMessage
            }),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'success') {
                // Add new message to the history state and clear the input field
                const updatedHistory = [
                    ...history,
                    { sender: senderId, text: newMessage } // Make sure sender ID is a string if history expects it as such
                ];
                setHistory(updatedHistory);
                setNewMessage('');
            } else {
                console.error('Error sending message:', data);
            }
        })
        .catch(error => console.error('Error sending message:', error));
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
    history: PropTypes.array.isRequired,
    setHistory: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired, 
    senderId: PropTypes.number.isRequired,
    recipientId: PropTypes.number.isRequired,
};

export default MessageHistory;
