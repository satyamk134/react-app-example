const paymentInfo = (state = {accountNumber:"", panNumber:""}, action) => {
   
      switch (action.type) {
        case 'ADD_PAYMENT_INFO':
          return {
            ...state.paymentInfo,
            accountNumber:action.accountNumber,
            panNumber:action.panNumber
        }
        default:
          return state
      }
}
    
export default paymentInfo