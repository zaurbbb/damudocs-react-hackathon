import * as React from 'react';
import {styled} from '@mui/material/styles';
import {useEffect, useState} from "react";
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

import Api from "../../../../api";

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

const AdminDoctorsListPage = () => {
    const [authenticated, setAuthenticated] = useState(null);
    const [doctorList, setDoctorList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const deleteDoctor = async (id) => {
        try {
            await Api.delete('/users/deleteDoctorById/' + id);
            window.location.reload();
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        async function fetch() {
            try {
                const res = await Api.get('/users/getAllDoctors');
                setDoctorList(res.data);
            } catch (e) {
                console.log(e)
            }
        }
        fetch().then();
    }, [doctorList]);


    return (
        <Grid item sx={{mt: 5}}>
            <Demo>
                <List>
                    {doctorList.map((doctor) => (
                        <ListItem
                            key={doctor.id}
                            secondaryAction={
                                <Box>
                                    <IconButton edge="end" aria-label="delete" href="/admin/editDoctor">
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon onClick={() => deleteDoctor(doctor.id)}/>
                                    </IconButton>
                                </Box>

                            }
                        >

                            <AccountCircleIcon sx={{mr: 2}}/>

                            <ListItemText
                                primary={`${doctor.id}) ${doctor.name}, ${doctor.IIN}, ${doctor.role}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Demo>
        </Grid>
    );
}


export default AdminDoctorsListPage;