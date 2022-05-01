import { Field, ErrorMessage } from 'formik';
import inputElementCSS from './css/InputElement.module.css';
const InputElement = (props) => {
    return (
        <div class={inputElementCSS.form_field}>
            <div class={inputElementCSS.form_field__control}>
                <Field 
                    className={inputElementCSS.form_field__input}
                    name={props.formikKey} 
                    type={props.inputType}
                    id={props.id}
                    placeholder=" "
                />
                <label htmlFor={props.id} class={inputElementCSS.form_field__label}>{props.label}</label>
                <ErrorMessage name={props.formikKey} >
                    {msg => <div role="alert" className={inputElementCSS.errormsg}>{msg}</div>}
                </ErrorMessage>
            </div>
        </div>
    )
}
export default InputElement;