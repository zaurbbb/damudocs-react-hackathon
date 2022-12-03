import * as React from 'react';
import {styled} from '@mui/material/styles';
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {
    Avatar, Box,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import doctors from '../../doctors';

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

const AdminDoctorsListPage = () => {
    const [authenticated, setAuthenticated] = useState(null);

    const deleteDoctor = (id) => {
        //ur code
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        return <Navigate replace to="/admin/doctorsList" />;
    } else {
        return (
            <Grid item sx={{mt: 5}}>
                <Demo>
                    <List>
                        {doctors.map((doctor) => (
                            <ListItem
                                key={doctor.id}
                                secondaryAction={
                                    <Box>
                                        <IconButton edge="end" aria-label="delete"  href="/admin/editDoctor">
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon onClick={() => deleteDoctor(doctor.id)}/>
                                        </IconButton>
                                    </Box>

                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccountCircleIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${doctor.name}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Demo>
            </Grid>
        );
    }
};


export default AdminDoctorsListPage;