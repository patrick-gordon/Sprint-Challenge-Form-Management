import React, {useState, useEffect} from 'react'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';



const SignupForm = ({ status, errors, touched,  }) => {
    
    const [users, setUsers] = useState([]);


  useEffect(() => {
    if (status) {
      setUsers(users => [...users, status])
    }
  }, [status]);

   

    return (
        <div>
            <h1>SIGN IN</h1>
            <Form>
                <Field type='text' name='username' placeholder='User Name' />
                {touched.username && errors.username && (
                    <p>{errors.username}</p>
                )}

                <Field type='text' name='password' placeholder="Password" />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}

                <button type='submit'>Submit!</button>
            </Form>
        </div>
    );
}

//HOC
const FormikForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('this field is required!'),
        password: Yup.string().required('this field is required!')
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        Axios
          .post(`http://localhost:5000/api/register`, values)
          .then(res => {
            console.log(res.data);
            setStatus(res.data);
            resetForm();
          })
          .catch(err =>  {
            console.log("Registration error: ", err);
          });
      }
    
    
    })(SignupForm);

export default FormikForm