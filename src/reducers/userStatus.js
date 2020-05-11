const userLogin = (state = false, action) => {
    console.log('todos called');
      switch (action.type) {
        case 'SET_LOGIN_STATUS':
          return action.loginStatus
        default:
          return state
      }
}
    
export default userLogin
    