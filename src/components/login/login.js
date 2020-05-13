import React from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import loginService from '../../http/login.service';
import qs from 'qs'

import ButtonLink from '../ButtonLink';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { browserHistory } from 'react-router';
import { setUserLoginStatus } from '../../actions/index'
import './login.scss';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

class login extends React.Component {
    constructor(props) {
        super(props)
        this.props.history.listen((location, action) => {
            console.log("on route change");
        });

    }

    continueWithGoogleHandler = () => {
        console.log("continute with google called");
        //call the backendEndpoint to get the google consent screen
        loginService.getGoogleConsent()
            .then(response => {
                console.log("response of google consent is", response);
                let resp = response.data;
                if (resp.status == 'success') {
                    window.open(resp.url, '_self')
                }
            })

    }

    /**
     * login with local creddentials
    */
    contiuteWithLocalHandler = ({email:emailId, password})=>{
        loginService.login({emailId, password})
        .then(response=>{
            console.log("Response is",response);
            this.reDirectToDashboard(response.data.data)
        })
    }

    componentDidMount() {
        console.log("did mout called")
        console.log("props are", this.props)
        let code = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).code
        console.log("code is", code)
        if (code) {

            //call the google end point to login and redirect to dashboard
            //LOGIN the users

            /**
             * first call get access-token
             */
            loginService.getAccessToken({ access_token: code })
                .then(response => {
                    console.log("resp=====> is", response);
                    //this.reDirectToDashboard(response.data);
                    localStorage.setItem('token', response.data.id_token);
                    return loginService.authorizeUser({ access_token: response.data.access_token })
                })
                .then(response => {
                    console.log("Response is", response)
                    this.reDirectToDashboard(response.data.data);
                })

        }
        // browserHistory.listen( location =>  {
        //     //Do your stuff here
        //    });
    }

    reDirectToDashboard = ({ token, lastName, role, emailId }) => {

        localStorage.setItem('token', token);
        localStorage.setItem('userInfo', JSON.stringify({ lastName: lastName, role: role, emailId: emailId }))
        this.props.setUserLoginStatus(true)
        this.props.history.push('/dashboard')
        //history.push("/home");

    }

    loginHandler = () => {
        console.log("Loggin happened");
        let history = useHistory();
        history.push("/users");
    }

    render() {
        return (
            <div className='container login-container'>
                <div className="form-wrapper">
                    <Formik validateOnChange={true}
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log("form submitted===========>")
                            console.log(values);
                            this.contiuteWithLocalHandler(values);
                            /**
                             * when validation is successful login the user
                            */
                           
                        }}

                    >{({ errors, touched, validateField, submitForm, handleSubmit, values, handleChange }) => (
                        <Form className="form-elements">
                            <div className="third-party-login-btns">
                                <div className='continute-with-google' onClick={this.continueWithGoogleHandler}>
                                </div>
                                <div className='continute-with-google'>

                                </div>
                            </div>

                            <Field id="standard-basic" error={errors.email && touched.email ? true : false}
                                label="Email" name="email" as={TextField}
                                helperText={(errors.email && touched.email) && errors.email}
                            />

                            <Field id="standard-basic1" type="password"
                                error={errors.password && touched.password ? true : false}
                                label="Password" name="password" as={TextField}
                                helperText={(errors.password && touched.password) && errors.password}
                            />

                            <div className="login-register-wrapper">
                                <div className="login-register-btn">
                                    <ButtonLink type="submit" link="dashboard" text="LOGIN" color="primary" onClick={submitForm} />
                                    <div className="register-btn-wrapper">
                                        <ButtonLink className="register-btn" color="secondary" link="register" text="REGISTER" />
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    {/* <form noValidate autoComplete="off" className="form-elements">

                        <div className="third-party-login-btns">
                            <div className='continute-with-google' onClick={this.continueWithGoogleHandler}>

                            </div>
                            <div className='continute-with-google'>

                            </div>
                        </div>

                        <TextField id="standard-basic" label="Email" onClick />
                        <TextField id="standard-basic" label="Password" />
                        <div className="login-register-btn">
                            <ButtonLink link="dashboard" text="LOGIN" color="primary" onClick={this.loginHandler}/>
                            <div className="register-btn-wrapper">
                                <ButtonLink className="register-btn" color="secondary" link="register" text="REGISTER" />
                            </div>
                        </div>
                    </form> */}
                </div>
            </div>
        )
    }



}
const getLoginStatus = yserStatus => {
    console.log("user status is", yserStatus);
}
const mapStateToProps = state => {
    console.log("map state inside visible to do list", state)
    return ({
        todos: getLoginStatus(state.userStatus)
    })
}

const mapDispatchToProps = dispatch => {
    console.log("dispatch called in visible to do list", dispatch)
    return ({
        setUserLoginStatus: status => dispatch(setUserLoginStatus(status))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(login)
