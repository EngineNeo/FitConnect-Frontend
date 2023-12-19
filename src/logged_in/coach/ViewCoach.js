import React, { Fragment } from 'react';
import { withStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import UserImage from '../../shared/components/UserImage';

const styles = theme => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    typography: {
        padding: theme.spacing(1),
    },
    name: {
        fontWeight: 'bold',
    }
});

const getExperienceLevel = (level) => {
    const levels = {
        1: 'Novice',
        2: 'Intermediate',
        3: 'Expert'
    };
    return levels[level] || 'Unknown';
};

const ViewCoach = ({ classes, coach }) => {
    return (
        <Fragment>
            <div>
                <UserImage
                    className={classes.avatar}
                    iconSize={40}
                    name={`${coach.first_name} ${coach.last_name}`}
                />
                <Typography gutterBottom variant="h5" component="div" className={classes.name}>
                    {coach.first_name} {coach.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.typography}>
                    Experience: {getExperienceLevel(coach.experience)}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.typography}>
                    Specialization: {coach.goal}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.typography}>
                    Price: ${coach.cost}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.typography}>
                    {coach.bio}
                </Typography>
            </div>
        </Fragment>
    );
};

export default withStyles(styles)(ViewCoach);