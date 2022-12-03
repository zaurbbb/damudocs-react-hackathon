import {useState} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Button, TextField} from "@mui/material";

const AdminLoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const users = [{username: "admin", password: "admin"}];
    const handleSubmit = (e) => {
        console.log(username, password)
        e.preventDefault();
        const account = users.find((user) => user.username === username);
        console.log(account && account.password === password);
        if (account && account.password === password) {
            setAuthenticated(true)
            localStorage.setItem("authenticated", true);
            window.location.href = '/admin/doctorsList';
        }
    };
    return (
        <div>
            <p>Welcome Back</p>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Admin Name"
                    variant="outlined"
                    type="text"
                    name="adminName"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <br/>
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br/>
                <br/>
                <Button
                    type="submit"
                    value="Submit"
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default AdminLoginPage;