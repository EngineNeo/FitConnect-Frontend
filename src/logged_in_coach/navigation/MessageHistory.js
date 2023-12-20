import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, TextField, Button } from "@mui/material";

const MessageHistory = ({ history, onSendMessage, onBack, senderId, recipientId }) => {
    const [newMessage, setNewMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState([]);

    const updateMessageHistory = (newHistory) => {
        setMessageHistory(newHistory);
      };

      const fetchAndUpdateMessageHistory = () => {
        if (recipientId !== null) {
            fetch(`http://localhost:8000/fitConnect/get_messages/${senderId}/${recipientId}/`)
                .then(response => response.json())
                .then(data => {
                    setMessageHistory(data.messages);
                })
                .catch(error => console.error('Error fetching messages:', error));
        }
    };
    
    useEffect(() => {
        fetchAndUpdateMessageHistory();
    }, [senderId, recipientId]); 

    const handleSendMessage = () => {
        console.log("Sender ID:", senderId, "Recipient ID:", recipientId, "Message:", newMessage);
        if(newMessage.trim() === "") {
            console.error('Empty message cannot be sent');
            return;
        }
        const newMessageObject = {
            sender_id: senderId,
            recipient_id: recipientId,
            message_text: newMessage
        };
        
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
                setNewMessage(''); 
                onSendMessage();
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
    onBack: PropTypes.func.isRequired, 
    senderId: PropTypes.number.isRequired,
    recipientId: PropTypes.number.isRequired,

};

export default MessageHistory;
