import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
} from "@mui/material";

// mock for testing without the backend
const mockClientRequests = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

function MyRequests() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRequests = mockClientRequests.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ bgcolor: 'black', color: 'white', minHeight: '100vh', minWidth: '100%', py: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
        Client Requests
      </Typography>
      <Box mb={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search Clients"
          value={searchTerm}
          onChange={handleSearchChange}
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white' } }}
        />
      </Box>
      {filteredRequests.map((request) => (
        <Card key={request.id} variant="outlined" sx={{ mb: 2, bgcolor: 'grey.900', color: 'white' }}>
          <CardContent>
            <Typography variant="subtitle1">{request.name}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success">
              Accept
            </Button>
            <Button variant="contained" color="error">
              Deny
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}

export default MyRequests;
