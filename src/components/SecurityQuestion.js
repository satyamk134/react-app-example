import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {setRegisterStep} from '../actions/index';
import { connect } from 'react-redux'
const secutiryQuesSchema = Yup.object().shape({
    securityAnswer: Yup.string()
        .required('Required')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
});
const SecurityQuestion = ({decrementStep,incrementStep,currentStep})=>{
    //console.log("setRegisterStep",setRegisterStep)
    const nextHandler = ()=>{
        incrementStep(currentStep+1)
    }
    const prevHandler = () => {
        decrementStep(currentStep-1)
    }

    return <Formik validateOnChange={true}
    initialValues={{
        securityAnswer:'',
    }}
    validationSchema={secutiryQuesSchema}
    onSubmit={values => {
        // same shape as initial values
        console.log("form submitted===========>")
        console.log(values);
        this.contiuteWithLocalHandler(values);
        /**
         * when validation is successful login the user
        */
       
    }}

>{({ errors, touched,isValid,dirty, validateField, submitForm, handleSubmit, values, handleChange }) => (
    <Form className="form-elements">
       

        <Field id="standard-basic" error={errors.securityAnswer && touched.securityAnswer ? true : false}
            label="Security question" placeholder="Your pet name" name="securityAnswer" as={TextField}
            helperText={(errors.securityAnswer && touched.securityAnswer) && errors.securityAnswer}
        />
        <div>
                  <Button
                         variant="contained"
                         color="primary"
                         onClick={prevHandler}
                        
                        
                   
                    
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={nextHandler}
                   
                    disabled={!(isValid && dirty)}
                  >
                     Next
                  </Button>
                </div>
    </Form>
)}
</Formik>
   
}

//const PersonalInfoComp =  connect(mapStateToProps,mapDispatchToProps)(PersonalInfo);
const mapStateToProps = state => {
    console.log("map state inside visible to do list", state)
    return ({
        currentStep: state.registerStep
    })
}

const mapDispatchToProps = dispatch => {
    console.log("dispatch called in visible to do list", dispatch)
    return ({
        incrementStep: step => dispatch(setRegisterStep(step)),
        decrementStep: step =>dispatch(setRegisterStep(step))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(SecurityQuestion)