import axios from 'axios';

const instance = axios.create({
    baseUrl:'https://app-emmundose.herokuapp.com/api/',
})

const sendForm = async (data)=>{
    const response = await instance({
        method: "POST",
        url: "about/save",
        data,
    });
    return response
}

export {
    sendForm
}