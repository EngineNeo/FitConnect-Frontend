import React, { useState, useEffect } from 'react';
import { Paper, Grid, TextField, Button, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CoachCard from './CoachCard';

const FindCoach = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [coaches, setCoaches] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("http://localhost:8000/fitConnect/coaches")
            .then(response => response.json())
            .then(data => setCoaches(data))
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter coaches based on search term
    const filteredCoaches = searchTerm
        ? coaches.filter(coach =>
            coach.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coach.last_name.toLowerCase().includes(searchTerm.toLowerCase()))
        : coaches;

    // Pagination logic
    const coachesPerPage = 12;
    const indexOfLastCoach = currentPage * coachesPerPage;
    const indexOfFirstCoach = indexOfLastCoach - coachesPerPage;
    const currentCoaches = filteredCoaches.slice(indexOfFirstCoach, indexOfLastCoach);

    const paginate = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div>
            <Paper style={{ padding: '20px', marginBottom: '20px' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                        <TextField
                            fullWidth
                            label="Search Coaches"
                            placeholder="Enter coach name"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Grid container spacing={3}>
                {currentCoaches.map((coach, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <CoachCard coach={coach} />
                    </Grid>
                ))}
            </Grid>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Pagination
                    count={Math.ceil(filteredCoaches.length / coachesPerPage)}
                    page={currentPage}
                    onChange={paginate}
                />
            </div>
        </div>
    );
};

export default FindCoach;