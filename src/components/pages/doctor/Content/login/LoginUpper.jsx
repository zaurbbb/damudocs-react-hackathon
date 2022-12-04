import React from 'react';
import Graph from './images/Graph.svg';

const LoginUpper = () => {
    return (
        <>
            <p className='p-h1'>Добрый день!</p>
            <p className='p-h5-right'>Всего принято пациентов - 42</p>
            <img src={Graph} alt=""/>
        </>
    );
};

export default LoginUpper;