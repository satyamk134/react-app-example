const registerStep = (state = 0, action) => {
    console.log('todos called',action);
      switch (action.type) {
        case 'SET_REGISTER_STEP':
          return action.registerStep
        default:
          return state
      }
}
    
export default registerStep