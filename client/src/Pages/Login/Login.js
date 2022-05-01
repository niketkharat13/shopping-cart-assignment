import React, {useState} from 'react';
import InputElemet from '../../Components/InputElement/InputElement';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../../store/slice/auth';
import SignupCss from '../SignUp/css/SignUp.module.css'
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formInputControl] = useState([
        {
          label: "Email",
          id: "email",
          formikKey: "email",
          inputType: "text",
          placeholder: "Please Enter Email"
        },
        {
          label: "Password",
          id: "password",
          formikKey: "password",
          inputType: "password",
          placeholder: "Please Enter Password"
        }
    ]);
   return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Please enter valid email id")
                  .required("Please enter email id"),
                password: Yup.string()
                  .required("Password is required"),
            })}
            onSubmit={values => {
                dispatch(authAction.login(values));
                navigate('/home');
            }}
        >
            {() => (
                <Form className={SignupCss.form}>
                    <section className={[SignupCss.container, 'container'].join(' ')}>
                    <div className={SignupCss.container_section}>
                      <h1>Login</h1>
                      <p>Get Access to your Orders. Wishlist and Recommondations</p>
                    </div>
                    <div className={[SignupCss.container_section, SignupCss.formsection].join(' ')}>
                        {
                            formInputControl.map((formInput,indx) => {
                                return (
                                    <React.Fragment key={indx}>
                                        <InputElemet 
                                            {...formInput}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                        <button type="submit" className={SignupCss.submitbtn}>Submit</button>
                    </div>
                  </section>
                </Form>
            )}
        </Formik>
   )
}
export default Login;