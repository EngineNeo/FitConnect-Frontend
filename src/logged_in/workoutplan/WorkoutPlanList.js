import React, { useState } from 'react';
import { List, ListItem, Divider, Typography, Paper, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const styles = {
    Paper: {
        padding: 30,
        marginBottom: 10,
    },
    StarIcon: {
        marginLeft: '10px',
    },
    Title: {
        marginBottom: '10px'
    }
};

const WorkoutPlanList = ({ onSelectPlan, onCreateNewPlan }) => {
    const initialItems = [
        { id: 'item-1', content: 'Workout A' },
        { id: 'item-2', content: 'Workout B' },
        { id: 'item-3', content: 'Workout C' },
        { id: 'item-4', content: 'Workout D' },
        { id: 'item-5', content: 'Workout E' },
        { id: 'item-6', content: 'Workout F' },
        { id: 'item-7', content: 'Workout G' },
        { id: 'item-8', content: 'Workout H' },
        { id: 'item-9', content: 'Workout I' },
    ];

    const [items] = useState(initialItems);
    const [todaysPlan, setTodaysPlan] = useState(null);

    const handleListItemClick = (plan) => {
        onSelectPlan(plan);
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === 'todays-plan') {
            setTodaysPlan(items[source.index]);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Typography variant="h4" style={styles.Title}>Today's Plan</Typography>
            <Droppable droppableId="todays-plan">
                {(provided) => (
                    <Paper
                        elevation={1}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={styles.Paper}
                    >
                        {todaysPlan ? (
                            <ListItem>
                                {todaysPlan.content}
                                <StarIcon style={styles.StarIcon} />
                            </ListItem>
                        ) : (
                            <Typography variant="body1">No Plan (Drag a plan here)</Typography>
                        )}
                        {provided.placeholder}
                    </Paper>
                )}
            </Droppable>
            <Divider />
            <Droppable droppableId="droppable">
                {(provided) => (
                    <List {...provided.droppableProps} ref={provided.innerRef}>
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <ListItem
                                        button
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        onClick={() => handleListItemClick(item)}
                                    >
                                        {item.content}
                                    </ListItem>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </List>
                )}
            </Droppable>
            <Button
                variant="contained"
                color="primary"
                onClick={onCreateNewPlan}
                style={{ marginTop: '10px' }}
            >
                Create New Plan
            </Button>
        </DragDropContext>
    );
};

export default WorkoutPlanList;
