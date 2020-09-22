import axios from "axios";


const instance = axios.create({
    baseURL: 'https://us-central1-fir-32983.cloudfunctions.net/api'
    //'http://localhost:5001/fir-32983/us-central1/api' // API (Cloud function) URL
});


export default instance;