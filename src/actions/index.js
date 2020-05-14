let nextTodoId = 0
export const  addTodo = text =>({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter =>{
    console.log("set visibilty filter called")
    return({
    type: 'SET_VISIBILITY_FILTER',
    filter
})}

export const toggleTodo = id =>({
    type: 'TOGGLE_TODO',
    id
})

export const setUserLoginStatus =loginStatus =>{
    console.log("login status",loginStatus)
    return ({
    type: 'SET_LOGIN_STATUS',
    loginStatus
})}

export const setRegisterStep = registerStep =>{
    console.log("registerStep",registerStep)
    console.log(({
        type: 'SET_REGISTER_STEP',
        registerStep
    }))
    return ({
    type: 'SET_REGISTER_STEP',
    registerStep
})}

export const addPersonalInfo = ({emailId, password,firstName,lastName}) => {
    //console.log("registerStep",registerStep)
    console.log(({
        type: 'ADD_PERSONAL_INFO',
        password,
        emailId,
        firstName,
        lastName
    }))
    return ({
        type: 'ADD_PERSONAL_INFO',
        password,
        emailId,
        firstName,
        lastName
})}

export const addPaymentInfo = ({accountNumber, panNumber}) => {  
    return ({
        type: 'ADD_PAYMENT_INFO',
        accountNumber,
        panNumber
})}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}