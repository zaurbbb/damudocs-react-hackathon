import {useState} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Api from "../../../../api";

const AdminCreateMedRecordPage = () => {
    const [medRecordName, setMedRecordName] = useState("");
    const [medRecordCategory, setMedRecordCategory] = useState("");
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setMedRecordName(e.target.value);
        setSubmitted(false);
    };

    const handleCategory = (e) => {
        setMedRecordCategory(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (medRecordName === '' || medRecordCategory === '') {
            setError(true);
        } else {
            Api.post('/record/createRecord', {
                title: medRecordName,
                fields: medRecordCategory.split(',')
            }).then(() => {
                setSubmitted(true);
                setError(false);
            }).catch((e) => {
                setError(true);
            });
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                    fontSize: '0.5rem',
                }}>
                <h1>Form {medRecordName} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                    fontSize: '0.5rem',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={3}
                    sx={{
                        my: 4,
                        padding: '0 12rem',

                    }}
                >
                    <Grid item xs={12}>
                        <TextField
                            style={{width: '100%'}}
                            label="Введите название мед. форму"
                            variant="outlined"
                            type="text"
                            name="doctorFullName"
                            value={medRecordName}
                            onChange={handleName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{width: '100%'}}
                            label="Введите разделы мед. формы через запятую"
                            variant="outlined"
                            type="text"
                            name="doctorIIN"
                            value={medRecordCategory}
                            onChange={handleCategory}
                        />
                    </Grid>
                </Grid>
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
                <Button
                    type="submit"
                    value="Submit"
                    variant="contained"
                    endIcon={<ArrowForwardIcon/>}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </form>
        </>
    );
};

export default AdminCreateMedRecordPage;