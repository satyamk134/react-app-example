import Api from './axios';

const api = new Api();
const loginService = {}

loginService.getGoogleConsent = ()=> {
   return  api.getRequest({path:'/auth/google',data:{}})
}

loginService.getAccessToken = ({access_token}) => {
   return api.getRequest({path:'/auth/token', data:{code:access_token }})
}

loginService.authorizeUser = ({access_token}) =>{
   
   return api.postRequest({path:'auth/authorizeUser', data: {access_token: access_token}})
}

loginService.login = (data)=>{
   return api.postRequest({path:'auth/login', data: {...data}})
} 

loginService.createUser = (data)=>{
   return api.postRequest({path:'auth/user', data: {...data}})

}


export default loginService
