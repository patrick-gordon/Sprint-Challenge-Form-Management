import React from 'react'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


const signupForm = ({ errors, touched, values, status }) => {
    return (
        <div>
            <h1>SIGN IN</h1>
            <Form>
                <Field type='text' name='userName' placeholder='User Name' />
                {touched.userName && errors.userName && (
                    <p>{errors.userName}</p>
                )}

                <Field type='text' name='password' placeholder="Password" />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}

                <button type='submit'>Submit!</button>
            </Form>
        </div>
    )
}

//HOC
const FormikForm = withFormik({
    mapPropsToValues({ userName, password }) {
        return {
            userName: userName || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        userName: Yup.string().required('this field is required!'),
        password: Yup.string().required('this field is required!')
    }),

    handleSubmit(value, { setStatus, resetForm }) {

    }
})(signupForm)

export default FormikForm