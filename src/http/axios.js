const axios = require('axios')


const instance = axios.create({
    baseURL:'http://localhost:4545/'
});

instance.interceptors.request.use(config => {
    // perform a task before the request is sent
    console.log('Request was sent',config);
    let token = localStorage.getItem('token');
    config.headers['Authorization'] = 'Bearer '+token
    return config;
  }, error => {
    // handle the error
    return Promise.reject(error);
});

instance.interceptors.response.use(apiResponse => {
    // perform a task before the request is sent
    console.log('response received',apiResponse.data);
  
    return apiResponse;
  }, error => {
    // handle the error
    return Promise.reject(error);
});

class Api {

    constrctor() { 
        this.baseURL = 'http://localhost:4545/'
        
    }
    
    

    getRequest({path,data}) {
        console.log("came iside get request",data)
        let params = data
        return instance.get(path,{params});
    }

    postRequest({path,data}) {
        return instance.post(path,data);
    }

    makeRequest(method){
        switch (method) {
            case 'get':
                console.log('Handle get request')
                break;

            case 'post':
                console.log("handle post request");

            case 'put':
                console.log("handle put request");
            default:
                break;
        }
    }
}



export default Api



