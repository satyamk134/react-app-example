const PersonalInfo = (state = {emailId:"",password:"",firstName:"", lastName:""}, action) => {
    console.log('todos called',action);
      switch (action.type) {
        case 'ADD_PERSONAL_INFO':
          return {
            ...state.paymentInfo,
            emailId:action.emailId,
            password:action.password,
            firstName:action.firstName,
            lastName:action.lastName
          }
        default:
          return state
      }
}
    
export default PersonalInfo