import {Button} from "@mui/material";

const StartPage = () => {

    return (
        <div>
            <p>Welcome to your DamuDocs. Who are you?</p>
            <Button
                href="/doctor"
                variant="contained"
                sx={{ mr: 5 }}
            >
                Doctor
            </Button>
            <Button
                href="/admin/doctorsList"
                variant="contained"
            >
                Admin
            </Button>
        </div>
    );

};

export default StartPage;