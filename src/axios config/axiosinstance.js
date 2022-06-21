import axios from "axios";


const axiosinstance=axios.create({
    baseURL:"https://api.themoviedb.org/",

});

export default axiosinstance;