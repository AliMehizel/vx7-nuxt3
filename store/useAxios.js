import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'



const baseURL = 'http://127.0.0.1:8000'


const useAxios = () => {

    let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
    const axiosInstance = axios.create({
        baseURL,
        headers:{
            'Authorization': `Bearer ${authTokens?.access}`
        }
    });


    axiosInstance.interceptors.request.use(async req => {
    
        const user = jwt_decode(authTokens.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if(!isExpired) return req
    
        const response = await axios.post(`${baseURL}/dj-rest-auth/token/refresh/`, {
            refresh: authTokens.refresh
          });
    
          localStorage.setItem('authTokens', JSON.stringify({'access':response.data.access, 'refresh':response.data.refresh}))
        

        
        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })
    
    return axiosInstance
}

export default useAxios;