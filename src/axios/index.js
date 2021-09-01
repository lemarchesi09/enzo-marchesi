import axios from 'axios';

const instance = axios.create({
    baseUrl:'https://joseamietta-laravel-api.herokuapp.com/api/',
})

const sendForm = async (data)=>{
    const response = await instance({
        method: "POST",
        url: "contact/store",
        data,
    });
    return response
}

export {
    sendForm
}