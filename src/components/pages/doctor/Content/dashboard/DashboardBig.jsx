import React, {useState, useEffect} from 'react';
import css from './DashboardStyles.module.sass'
import {Button, FormControl, MenuItem, Select, TextField} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Api from "../../../../../api";

const DashboardBig = () => {
    const [ptnName, setPtnName] = useState("");
    const [ptnGender, setPtnGender] = useState("Мужской");
    const [ptnAddress, setPtnAddress] = useState("");
    const [ptnIIN, setPtnIIN] = useState("");
    const [ptnNumber, setPtnNumber] = useState("");
    const [ptnDD, setPtnDD] = useState("");
    const [records, setRecords] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState();
    const [doctorId, setDoctorId] = useState();

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                    fontSize: '0.5rem',
                }}>
                <h1>Запись успешно сохранена</h1>
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
                <h1>Произошла ошибка при сохранении записи</h1>
            </div>
        );
    };

    const data = [];
    const handleName = (e) => {
        setPtnName(e.target.value);
    };

    const handleIIN = (e) => {
        setPtnIIN(e.target.value);
    };

    const handleAddress = (e) => {
        setPtnAddress(e.target.value);
    };

    const handleNumber = (e) => {
        setPtnNumber(e.target.value);
    };

    const handleDD = (e) => {
        setPtnDD(e.target.value);
    };

    const handleGender = (e) => {
        setPtnGender(e.target.value);
    };

    const handleData = (e, id) => {
        data[id] = e.target.value;
    };

    const handleForm = (e, id) => {
        async function fetch() {
            try {
                const res = await Api.get('/record/getRecordById/' + id);
                setSelectedRecord(res.data);
            } catch (e) {
                console.log(e)
            }
        }

        fetch().then();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        async function fetch() {
            try {
                const res = await Api.post('/med/analysis', {
                    data,
                    ptn_name: ptnName,
                    ptn_number: ptnNumber,
                    ptn_dd: ptnDD,
                    ptn_address: ptnAddress,
                    ptn_gender: ptnGender,
                    ptn_iin: ptnIIN,
                    form_type: selectedRecord['id'],
                    doctor_id: doctorId
                });
                if (res.data.error) {
                    setError(true)
                } else {
                    setError(false)
                    setSubmitted(true)
                }
            } catch (e) {
                setError(true)
                console.log(e)
            }
        }

        fetch().then();
    };

    useEffect(() => {
        async function fetch() {
            try {
                const res = await Api.get('/record/getAllRecords');
                setRecords(res.data);
            } catch (e) {
                console.log(e)
            }
        }

        fetch().then();
    }, []);

    useEffect(() => {
        async function fetch() {
            try {
                const user = localStorage.getItem("user");
                if (user) {
                    const res = await Api.post('/users/validate', {
                        token: JSON.parse(user).token
                    });
                    setDoctorId(res.data.user.id);
                }
            } catch (e) {
                console.log(e)
            }
        }

        fetch().then();
    }, []);


    return (
        <div>
            <div
                className={css.FormContainer}
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <p className="p-h1">Создать запись</p>
                        <FormControl>
                            <Select defaultValue={'ru'}>
                                <MenuItem value={'ru'}>
                                    <div>
                                        Новый пациент
                                    </div>
                                </MenuItem>
                                <MenuItem value={'kz'}>
                                    <div>
                                        Знакомый пациент
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <p className='p-h2'>Информация</p>
                        <article>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                placeholder="Имя и Фамилия пациента"
                                value={ptnName}
                                onChange={handleName}
                                autoComplete="name"
                                autoFocus
                            />


                            <TextField
                                required
                                fullWidth
                                type='date'
                                value={ptnDD}
                                onChange={handleDD}
                                autoComplete="date"
                                autoFocus
                            />
                            <FormControl>
                                <Select defaultValue={'Мужской'}>
                                    <MenuItem value={'Мужской'} onClick={handleGender}>
                                        <div>
                                            Мужской
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={'Женский'} onClick={handleGender}>
                                        <div>
                                            Женский
                                        </div>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </article>
                    </div>
                    <div>
                        <p className='p-h2'>Контакты</p>
                        <article>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                placeholder="Адрес проживание пациента"
                                value={ptnAddress}
                                onChange={handleAddress}
                                autoComplete="address"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                placeholder="Номер пациента"
                                value={ptnNumber}
                                onChange={handleNumber}
                                autoComplete="number"
                                autoFocus
                            />

                            <TextField
                                required
                                fullWidth
                                type="number"
                                placeholder="ИИН"
                                value={ptnIIN}
                                onChange={handleIIN}
                                autoComplete="IIN"
                                autoFocus
                            />
                        </article>
                    </div>
                    <div>
                        <p className='p-h2'>Мед. книжка</p>
                        <article>
                            <TextField
                                margin="normal"
                                fullWidth
                                placeholder="Аллергии и противопаказание"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                placeholder="Хронические болезни"
                                autoFocus
                            />
                            <TextField
                                fullWidth
                                type="number"
                                placeholder="ID"
                                autoFocus
                            />
                        </article>
                    </div>
                    <div>
                        <p className='p-h2'>Мед. форма</p>
                    </div>
                    <FormControl>
                        <Select>
                            {
                                records.map((record) => (
                                    <MenuItem key={record.id} value={record.title}
                                              onClick={(e) => handleForm(e, record.id)}>
                                        <div>
                                            {record.title}
                                        </div>
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    {
                        selectedRecord ? JSON.parse(selectedRecord['fields']).map((field, i) => (
                                <div key={i}>
                                    <TextField
                                        multiline
                                        rows={6}
                                        margin="dense"
                                        fullWidth
                                        placeholder={field}
                                        onChange={(e) => handleData(e, i)}
                                        autoFocus
                                    />
                                </div>
                            ))
                            : <></>
                    }
                    <div>
                        <Button
                            type="submit"
                            value="Сохранить данные"
                            variant="contained"
                            fullWidth
                            endIcon={<ArrowForwardIcon/>}
                        >
                            Submit
                        </Button>
                    </div>
                    <div className="messages">
                        {errorMessage()}
                        {successMessage()}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DashboardBig;