import React from "react";
import ButtonLink  from '../ButtonLink';
import TextField from '@material-ui/core/TextField';
import './login.scss'

class login extends React.Component {
    
    
    render() {
        return (
            <ButtonLink link="dashboard" text="LOGIN" color="primary" />
        )
    }



}

// const mapStateToProps = state => {
//     console.log("map state inside visible to do list",state)
//     return ({
//     todos: getLoginStatus(state.userStatus)
//   })}
  
//   const mapDispatchToProps = dispatch => {
//     console.log("dispatch called in visible to do list",dispatch)
//     return ({
//         setUserLoginStatus: status => dispatch(setUserLoginStatus(status))
//   })}
  
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(login)
export default login
