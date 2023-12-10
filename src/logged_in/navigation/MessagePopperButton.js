import React, { Fragment, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import {
  Popover,
  IconButton,
  AppBar,
  List,
  Divider,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import MessageIcon from "@mui/icons-material/Message";
import MessageListItem from "./MessageListItem";
import MessageHistory from "./MessageHistory";

const styles = (theme) => ({
  tabContainer: {
    overflowY: "auto",
    maxHeight: 350,
  },
  popoverPaper: {
    width: "100%",
    maxWidth: 350,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      maxWidth: 270,
    },
  },
  divider: {
    marginTop: -2,
  },
  noShadow: {
    boxShadow: "none !important",
  },
});

const mockUsers = [
  { id: 1, name: 'Alice', avatar: 'path/to/alice.jpg' },
  { id: 2, name: 'Bob', avatar: 'path/to/bob.jpg' },
  // ... more users
];

const fetchMessageHistory = (userId) => {
  // Mock data
  const mockMessageHistory = {
    1: [
      { id: 1, text: 'Hi there!', sender: 'Alice', date: new Date() },
      { id: 2, text: 'Hey Alice, how are you?', sender: 'You', date: new Date() },
      // ... more messages
    ],
    2: [
      { id: 3, text: 'Hello!', sender: 'Bob', date: new Date() },
      { id: 4, text: 'Hi Bob, you good?', sender: 'You', date: new Date() },
      // ... more messages
    ],
      // ... other histories
  };
  return mockMessageHistory[userId] || [];
};

function MessagePopperButton(props) {
  const { classes, messages = [] } = props;
  const anchorEl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);

  const handleUserSelect = (userId) => {
    const history = fetchMessageHistory(userId);
    setSelectedUser(userId);
    setMessageHistory(history);
  };

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleClickAway = useCallback((event) => {
    if (anchorEl.current && (anchorEl.current.contains(event.target) || event.target === anchorEl.current)) {
      return;
    }
    setIsOpen(false);
  }, [setIsOpen]);

  const handleBackToUsers = () => {
    setSelectedUser(null);
    setMessageHistory([]);
  };

  const id = isOpen ? "scroll-playground" : null;
  return (
    <Fragment>
      <IconButton
        onClick={handleClick}
        aria-label="Open Messages"
        aria-describedby={id}
        color="primary"
        size="large">
        <MessageIcon />
      </IconButton>
      <Popover
        disableScrollLock
        id={id}
        open={isOpen}
        anchorEl={anchorEl.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{ paper: classes.popoverPaper }}
        onClose={handleClickAway}
      >
        <AppBar position="static" color="inherit" className={classes.noShadow}>
          <Box pt={1} pl={2} pb={1} pr={1}>
            <Typography variant="subtitle1">Messages</Typography>
          </Box>
          <Divider className={classes.divider} />
        </AppBar>
        <List dense className={classes.tabContainer}>
          {/* Conditional rendering based on selectedUser */}
          {selectedUser === null ? (
                mockUsers.map((user) => (
                    <ListItem key={user.id} button onClick={() => handleUserSelect(user.id)}>
                        <ListItemText primary={user.name} />
                    </ListItem>
                ))
            ) : (
                <MessageHistory history={messageHistory} onBack={handleBackToUsers} />
          )}
        </List>
      </Popover>
    </Fragment>
  );
}

MessagePopperButton.propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MessagePopperButton.defaultProps = {
  messages: [],
};

export default withStyles(styles, { withTheme: true })(MessagePopperButton);
