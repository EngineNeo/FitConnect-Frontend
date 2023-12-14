import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';

const UserImage = ({ className, iconSize }) => {
    // Function to generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Calculate the box size based on the iconSize
    const boxSize = iconSize * 2;

    // Circle style with random background color
    const circleStyle = {
        backgroundColor: getRandomColor(),
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: boxSize,
        height: boxSize
    };

    return (
        <Box className={className} style={circleStyle}>
            <PersonIcon style={{ fontSize: iconSize }} />
        </Box>
    );
};

export default UserImage;