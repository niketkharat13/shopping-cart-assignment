import React, {useState} from 'react';
import InputElemet from '../../Components/InputElement/InputElement';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { authAction } from '../../store/slice/auth';
import { useNavigate } from 'react-router-dom';
import SignupCss from './css/SignUp.module.css';
const SignUp = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
    const [formInputControl] = useState([
        {
          label: "First Name",
          id: "fName",
          formikKey: "firstName",
          inputType: "text",
          placeholder: "Please Enter First Name"
        },
        {
          label: "Last Name",
          id: "lName",
          formikKey: "lastName",
          inputType: "text",
          placeholder: "Please Enter Last Name"
        },
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
        },
        {
          label: "Confirm Password",
          id: "cPassword",
          formikKey: "confirmPassword",
          inputType: "password",
          placeholder: "Please Re-Enter Password"
        }
    ]);
   return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string()
                  .min(2, "Too Short!")
                  .max(50, "Too Long!")
                  .matches(/^[aA-zZ]+$/, "please enter valid first name")
                  .required("Please enter First Name"),
                lastName: Yup.string()
                  .min(2, "Too Short!")
                  .max(50, "Too Long!")
                  .matches(/^[aA-zZ]+$/, "please enter valid last name")
                  .required("Please enter Last Name"),
                email: Yup.string()
                  .email("Invalid email")
                  .required("Please Enter Email Id"),
                password: Yup.string()
                  .min(6, "Password should be 6 length long")
                  .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]$/,  "Please enter valid password")
                  .required("Password is required"),
                confirmPassword: Yup.string()
                  .required("Please Enter Confirm Password")
                  .oneOf([Yup.ref("password"), null], "Password and Confirm Password must match")
            })}
            onSubmit={values => {
              delete values.confirmPassword;
              dispatch(authAction.signUp(values))
              navigate('/log-in')
            }}
        >
            {(props) => (
              <Form className={SignupCss.form}>
                  <section className={[SignupCss.container, 'container', ].join(' ')}>
                    <div className={SignupCss.container_section}>
                      <div>
                        <h1>Signup</h1>
                        <p>We do not share your personal information with anyone.</p>

                      </div>
                    </div>
                    <div className={[SignupCss.container_section, SignupCss.formsection].join(' ')}>
                      {
                          formInputControl.map((formInput,indx) => {
                              return (
                                  <React.Fragment key={indx}>
                                      <InputElemet 
                                          {...formInput}
                                          value={props.values[formInput.formikKey]}
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
export default SignUp;