const userLogin = (state = false, action) => {
  
      switch (action.type) {
        case 'SET_LOGIN_STATUS':
          return action.loginStatus
        default:
          return state
      }
}
    
export default userLogin
    