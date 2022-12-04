import React, {useEffect, useState} from 'react';
import Graph from './images/Graph.svg'
import API from "../../../../../api";


const DashboardUpper = () => {
    const [name, setName] = useState("Имя Фамилия");
    useEffect(() => {
        async function fetch() {
            try {
                const user = localStorage.getItem("user");
                if (user) {
                    const auth = await API.post('/users/validate', {
                        token: JSON.parse(user).token
                    });
                    setName(auth.data.user.name);
                }
            } catch (e) {
                console.log(e)
            }
        }

        fetch().then();
    }, []);

    return (
        <>
            <p className='p-h1'>Добрый день!</p>
            <p className='p-h2'>Доктор - {name} !</p>
            <p className='p-h5-right'>Принято пациентов - 4</p>
            <img src={Graph} alt=""/>
        </>
    );
};

export default DashboardUpper;