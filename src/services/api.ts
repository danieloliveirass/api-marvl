import React from 'react';
import axios from 'axios';
import md5 from 'md5';


const publicKey = 'seu token da api';
const privateKey = 'seu token da api';

//convertendo para numeros
const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL:'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
    },
});

export default api;