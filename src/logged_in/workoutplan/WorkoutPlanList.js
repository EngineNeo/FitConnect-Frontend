import React, { useEffect, useState } from 'react';
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
        marginTop: '10px',
        marginBottom: '10px'
    },
    ListItemHover: {
        cursor: 'pointer',
    }
};

const WorkoutPlanList = ({ plans, onSelectPlan, onCreateNewPlan, onSelectTodaysPlan }) => {
    const [todaysPlan, setTodaysPlan] = useState(null);

    const handleListItemClick = (plan) => {
        console.log(plan)
        onSelectPlan(plan);
    };

    const handleTodaysPlanClick = (todaysPlan) => {
        onSelectTodaysPlan(todaysPlan);
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === 'todays-plan') {
            const draggedItem = plans[source.index];
            setTodaysPlan(draggedItem);
        }
    };

    const getTodayDateString = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    useEffect(() => {
        const savedTodaysPlan = localStorage.getItem('todaysPlan');
        const savedDate = localStorage.getItem('todaysPlanDate');
        const todayDate = getTodayDateString();

        if (savedTodaysPlan && savedDate === todayDate) {
            setTodaysPlan(JSON.parse(savedTodaysPlan));
        }
    }, []);

    useEffect(() => {
        if (todaysPlan) {
            const todayDate = getTodayDateString();
            localStorage.setItem('todaysPlan', JSON.stringify(todaysPlan));
            localStorage.setItem('todaysPlanDate', todayDate);
        }
    }, [todaysPlan]);

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
                        onClick={() => handleTodaysPlanClick(todaysPlan)}
                    >
                        {todaysPlan ? (
                            <ListItem style={styles.ListItemHover}>
                                {todaysPlan.plan_name}
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
            <Typography variant="h6" style={styles.Title}>Your Workout plans</Typography>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <List {...provided.droppableProps} ref={provided.innerRef}>
                        {plans.map((item, index) => {
                            if (!item || !item.plan_id || !item.plan_name) {
                                // Handle missing data
                                return null;
                            }
                            return (
                                <Draggable key={item.plan_id} draggableId={`draggable-${item.plan_id}`} index={index}>
                                    {(provided) => (
                                        <ListItem
                                            button
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            onClick={() => handleListItemClick(item)}
                                        >
                                            {item.plan_name}
                                        </ListItem>
                                    )}
                                </Draggable>
                            );
                        })}
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
