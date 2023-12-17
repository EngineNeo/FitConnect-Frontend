import React, { useState, useEffect } from 'react';
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
    }
};

const userId = localStorage.getItem('user_id');

const WorkoutPlanList = ({ onSelectPlan, onCreateNewPlan, onSelectTodaysPlan }) => {
    const [items, setItems] = useState([]);
    const [todaysPlan, setTodaysPlan] = useState(null);

    console.log(todaysPlan)

    const handleListItemClick = (plan) => {
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
            const draggedItem = items[source.index];
            setTodaysPlan(draggedItem);
        }
    };

    const fetchWorkoutPlans = async () => {
        try {
            const response = await fetch(`http://localhost:8000/fitConnect/plans?user_id=${userId}`);
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching workout plans:', error);
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

    useEffect(() => {
        fetchWorkoutPlans();
    }, [userId]);

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
                            <ListItem>
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
                        {items.map((item, index) => (
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