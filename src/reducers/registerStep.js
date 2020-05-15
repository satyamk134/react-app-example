const registerStep = (state = 0, action) => {
   
      switch (action.type) {
        case 'SET_REGISTER_STEP':
          return action.registerStep
        default:
          return state
      }
}
    
export default registerStep