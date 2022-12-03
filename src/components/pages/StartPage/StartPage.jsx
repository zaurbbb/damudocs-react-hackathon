import {Button} from "@mui/material";

const StartPage = () => {

    return (
        <div>
            <h2>Добро пожаловать на DamuDocs! Кем вы являетесь?</h2>
            <Button
                href="/doctor/dashboard"
                variant="contained"
                sx={{ mr: 5 }}
            >
                Доктор
            </Button>
            <Button
                href="/admin/doctorsList"
                variant="contained"
            >
                Администратор
            </Button>
        </div>
    );

};

export default StartPage;