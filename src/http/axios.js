const axios = require('axios')


const instance = axios.create({
    baseURL:'http://localhost:4545/'
});

instance.interceptors.request.use(config => {
    // perform a task before the request is sent
    console.log('Request was sent',config);
    config.headers['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI4Yjc0MWU4ZGU5ODRhNDcxNTlmMTllNmQ3NzgzZTlkNGZhODEwZGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMTE5OTIxNTIxMjctZmN2Zm81ODU3amZnbzBlZjl1MTEzaXFzYzNtdWlobHQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzMTE5OTIxNTIxMjctZmN2Zm81ODU3amZnbzBlZjl1MTEzaXFzYzNtdWlobHQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTAxMzYwNTY0Nzk0NTg3Mjc0MDgiLCJlbWFpbCI6InNhdHlhbWsxMzRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ0eUdpcWszWmVkNVZaS3NhQWhQcEl3IiwibmFtZSI6IlNhdHlhbSBLdW1hciIsInBpY3R1cmUiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUlHaEdLRnh5M3hnL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FBS1dKSlBaLVVGZFBmNG9HYkFXVDRJdU4wYUIyc3BONncvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IlNhdHlhbSIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU4ODI1NzEzNywiZXhwIjoxNTg4MjYwNzM3fQ.iO9cyugZbl9z7lH4e4rmV2tSj7PFDNGQZRtaQpJURzF56nFVJxzqqavOZH0-rb5CKrwJHr0rLFwtf1gKkcANiZD7vbx2Zn4bRZzpPRioYJnr6_OdXL4Nqs9U09zndQpBHSBLuZSQXBS353iad8rShltpOW7TL1QU_WCc48MTqKYe7e2tWMoJmbSBbfCFN-EFOKSsWlA-5Z9C7xncSTkFI8R4YuNoWx-pMu5VYQKqsFlev9YybpEI5vtQkRGD5eeELdPaBoSNHb8yzcPVbHPIPlYQq9_ON-LcXfkeHmGU8SFKcqtT8P_MXfxUehdrgUqok_z7esL895yEFuoXz6O5nA'
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
    
    

    getRequest() {
        console.log("came iside get request")
        return instance.get('file/users');
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



