import * as React from 'react';
import {styled} from '@mui/material/styles';
import {useState, useEffect} from "react";
import {
    Box,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import Api from "../../../../api";

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));


const AdminMedRecordsListPage = () => {
    const [authenticated, setAuthenticated] = useState(null);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function fetch() {
            try {
                const res = await Api.get('/med/getAllForms');
                setRecords(res.data);
            } catch (e) {
                console.log(e)
            }
        }

        fetch().then();
    }, []);


    const deleteDoctor = async (id) => {
        try {
            await Api.delete('/med/deleteFormById/' + id);
            window.location.reload();
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Grid item sx={{mt: 5}}>
            <Demo>
                <List>
                    {records.map((record) => (
                        <ListItem
                            key={record.id}
                            sx={{borderTop: `${record.id === 1 ? '1px solid black' : ''}`, borderBottom: '1px solid black'}}
                            secondaryAction={
                                <Box sx={{ml: 50}}>
                                    <IconButton edge="end" aria-label="pdf">
                                        <PictureAsPdfIcon onClick={() => window.location.href = record.pdf_url}/>
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon onClick={() => deleteDoctor(record.id)}/>
                                    </IconButton>
                                </Box>

                            }
                        >
                            <ArticleIcon/>
                            <ListItemText
                                sx={{mr: 8, ml: 2}}
                                style={{overflowX: 'scroll', whiteSpace: 'nowrap'}}
                                primary={`#${record.id}. ${record.form_type}. Доктор: ${record.doctor.name}. Пациент: ${record.ptn_name}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Demo>
        </Grid>
    );
}

export default AdminMedRecordsListPage;