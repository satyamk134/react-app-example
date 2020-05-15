
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios');


const instance = axios.create({
    baseURL:'http://localhost:4545/'
});

instance.interceptors.request.use(config => {
    // perform a task before the request is sent
    
    let token = localStorage.getItem('token');
    config.headers['Authorization'] = 'Bearer '+token
    return config;
  }, error => {
    // handle the error
    console.log("Error in http ",error)
    return Promise.reject(error);
});

instance.interceptors.response.use(apiResponse => {
    // perform a task before the request is sent
   
    
    return apiResponse;
  }, error => {
    // handle the error
    console.log("Error in http "+JSON.stringify(error.response))

    if(error.response.status === 403) {
       toast.error(error.response.data.err.msg)
 
       
        
        //alert("403 http status error");
       
    }
    return Promise.reject(error);
});

class Api {

    constrctor() { 
        this.baseURL = 'http://localhost:4545/'
        
    }
    
    getRequest({path,data}) {
      
        let params = data
        return instance.get(path,{params});
    }

    postRequest({path,data}) {
        return instance.post(path,data);
    }

   
}



export default Api



