import React, { Fragment } from 'react';
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import UserImage from '../../shared/components/UserImage';

const styles = {
    card: {
        maxWidth: 345,
        margin: 'auto'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    typography: {
        padding: '8px 0',
    },
    button: {
        margin: '0 5px',
    }
};

const CoachCards = ({ coach }) => {
    return (
        <Fragment>
            <Card style={styles.card}>
                <CardContent style={styles.content}>
                    <UserImage
                        className=""
                        iconSize={40}
                        name={`${coach.first_name} ${coach.last_name}`}
                        style={styles.avatar}
                    />
                    <Typography gutterBottom variant="h5" component="div" style={{ ...styles.typography, ...styles.name }}>
                        {coach.first_name} {coach.last_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={styles.typography}>
                        Experience: {coach.experience}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={styles.typography}>
                        Goal: {coach.goal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={styles.typography}>
                        Price: ${coach.cost}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={styles.typography}>
                        {coach.bio}
                    </Typography>
                </CardContent>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>More Options</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" color="primary" style={styles.button} startIcon={<PersonAddIcon />}>
                            Request Coach
                        </Button>
                        <Button variant="outlined" color="primary" style={styles.button} startIcon={<SendIcon />}>
                            Message Coach
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Card>
        </Fragment>
    );
};

export default CoachCards;
