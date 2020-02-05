import axios from 'axios';

const Base_URL = 'http://localhost:3001/'

const api = axios.create({
    baseURL: Base_URL
})

const proxy = require('http-proxy-middleware')


export const getAllContacts= async () => {
    try{
        const resp = await api.get('/api/form');
        console.log(resp.json);
        return resp.json;
    }
    catch (e) {
        console.log(e.message);
    }
}

export const getOneContact = async (id) => {
    try{
        const resp = await api.get(`/api/form/${id}`);
        return resp.json;
    }
    catch (e) {
        console.log(e.message);
    }
}

export const addContact = async (data) => {
    try{
        const resp = await api.post('/api/form/', data);
        console.log(resp);
        return resp.json;
    }
    catch(e){
        console.log(e.message)
    }
}

export const updateContact = async (id, data) => {
    try{
        const resp = await api.put(`/api/form/(${id})`, data);
        return resp.json
    }
    catch(e){
        console.log(e.message)
    }
}

export const deleteContact = async (id, data) => {
    try{
        const resp = await api.delete(`/api/form(${id})`, data);
        return resp.json
    }
    catch(e){
        console.log(e.message)
    }
}
