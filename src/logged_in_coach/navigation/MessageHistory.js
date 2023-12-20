import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, TextField, Button, Typography } from "@mui/material";

const MessageHistory = ({ history, onBack, senderId, recipientId }) => {
    const [newMessage, setNewMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState([]);
    const [, setRenderTrigger] = useState(false);
    const bottomRef = useRef(null);

    const fetchAndUpdateMessageHistory = () => {
        if (recipientId !== null) {
            fetch(`http://localhost:8000/fitConnect/get_messages/${senderId}/${recipientId}/`)
                .then(response => response.json())
                .then(data => setMessageHistory(data.messages))
                .catch(error => console.error('Error fetching messages:', error));
        }
    };

    useEffect(() => {
        fetchAndUpdateMessageHistory();
        setRenderTrigger(prev => !prev);
    }, [senderId, recipientId]);

    const handleSendMessage = () => {
        if (newMessage.trim() === "") {
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
                setNewMessage('');
                fetchAndUpdateMessageHistory(); // Fetch and update message history after sending a new message
            } else {
                console.error('Error sending message:', data);
            }
        })
        .catch(error => console.error('Error sending message:', error));
    };
    
      return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Button onClick={onBack}>Back to Users</Button>
        <List style={{ overflowY: 'auto', flexGrow: 1, marginBottom: '10px' }}>
            {messageHistory.map((message, index) => (
            <ListItem key={index} alignItems="flex-start">
            <Typography variant="subtitle2" component="span" style={{ fontWeight: 'bold', marginRight: '10px' }}>
                {message.sender_name}:
            </Typography>
            <Typography variant="body1" style={{ wordBreak: 'break-word' }}>
                {message.text}
            </Typography>
            </ListItem>
            ))}
        </List>
          <div ref={bottomRef} style={{ borderTop: '1px solid grey', padding: '10px' }}>
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
        </div>
      );
    
};

MessageHistory.propTypes = {
    onBack: PropTypes.func.isRequired, 
    senderId: PropTypes.number.isRequired,
    recipientId: PropTypes.number.isRequired,

};

export default MessageHistory;
