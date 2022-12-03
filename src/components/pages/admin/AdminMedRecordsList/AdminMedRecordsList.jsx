import * as React from 'react';
import {styled} from '@mui/material/styles';
import {useState} from "react";
import {
    Avatar, Box, Button,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import doctors from '../../doctors';

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

const AdminMedRecordsListPage = () => {
    const [authenticated, setAuthenticated] = useState(null);

    const deleteDoctor = (id) => {
        //ur code
    }
    return (
        <Grid item sx={{mt: 5}}>
            <Demo>
                <List>
                    {doctors.map((doctor) => (
                        <ListItem
                            key={doctor.id}
                            secondaryAction={
                                <Box sx={{ml: 50}}>
                                    <IconButton edge="end" aria-label="delete">
                                        <PictureAsPdfIcon onClick={() => deleteDoctor(doctor.id)}/>
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon onClick={() => deleteDoctor(doctor.id)}/>
                                    </IconButton>
                                </Box>

                            }
                        >
                            <ArticleIcon/>
                            <ListItemText
                                sx={{mr: 8, ml: 2}}
                                style={{overflowX: 'scroll', whiteSpace: 'nowrap'}}
                                primary={`#1. Сведение о цероз печени у Данила Еслямгалиева от Калиматова Акжана.Сведение о цероз печени у Данила Еслямгалиева от Калиматова Акжана. `}
                            />
                        </ListItem>
                    ))}
                </List>
            </Demo>
        </Grid>
    );
}

export default AdminMedRecordsListPage;