import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import withStyles from '@mui/styles/withStyles';

const styles = (theme) => ({
    cardWrapper: {
        border: `1px solid ${theme.palette.common.primary}`,
        borderRadius: theme.shape.borderRadius,
        textAlign: 'center',
        padding: theme.spacing(2),
        width: "400px",
        marginBottom: theme.spacing(3),
    },
    imageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: theme.spacing(2),
    },
    image: {
        width: '150px',
        borderRadius: "9999px",
    },
    centeredText: {
        textAlign: 'center',
    },
});

function TopCoachesCard(props) {
    const { classes, image, headline, text } = props;
    return (
        <Fragment>
            <div className={classes.cardWrapper}>
                <div className={classes.imageWrapper}>
                    <img src={image} alt="Coach" className={classes.image} />
                </div>
                <Typography variant="h5" paragraph className={classes.centeredText}>
                    {headline}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph className={classes.centeredText}>
                    {text}
                </Typography>
            </div>
        </Fragment>
    );
}

TopCoachesCard.propTypes = {
    classes: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired, // URL of the image
    headline: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(TopCoachesCard);
