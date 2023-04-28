import React from 'react'
import { Field, Formik, Form, ErrorMessage, touched } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import '../App.css'



const Login = () => {

  const Navigate = useNavigate()


  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().max(8).min(6),
  });

  return (
    <div>
      <section>
        <div className="login ">
          <div className="login-title">
            <h2>LOGIN</h2>
            <span>Please enter your e-mail and password:</span>
          </div>
          <div className="login-input">
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => {
                localStorage.setItem('user', JSON.stringify(values))
                alert(JSON.stringify(values, null, 2));
                Navigate("/")
              }}
              validationSchema={schema}
            >
              {({ touched, errors }) => (
                <Form>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={`form-control border  ${touched.email && errors.email ? 'error' : ''}`}
                  />
                  {""}

                  <ErrorMessage name="email" component="div" />

                  <Field
                    type="password"
                    className={`form-control border  ${touched.password && errors.password ? 'error' : ''}`}
                    name="password"
                    placeholder="Your Password" />
                  {""}
                  <ErrorMessage name="password" component="div" />
                  <div className="btn6">
                    <button type='submit'>LOGIN</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="sign-up-title">
            <h1>Don't have an account?<Link to='/register'>Create one</Link></h1>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Login
