import React from 'react'
import { Field, Formik, Form, ErrorMessage, touched } from 'formik';
import * as yup from 'yup';
import '../App.css'
import { Link } from 'react-router-dom';

const Register = () => {

  const schema = yup.object().shape({
    firstname: yup.string('Name must be Filled in Alphabet').required(),
    lastname: yup.string('Name must be Filled in Alphabet').required(),
    email: yup.string().email().required(),
    password: yup.string().required().max(8).min(6),
  });

  return (
    <div>

      <section>
        <div className="login ">
          <div className="login-title">
            <h2>REGISTER</h2>
            <span>Please enter your e-mail and password:</span>
          </div>
          <div className="login-input">
            <Formik
              initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
              onSubmit={(values) => {
                localStorage.setItem('admin', JSON.stringify(values))
                alert(JSON.stringify(values, null, 2));
              }}

              validationSchema={schema}
            >
              {({ touched, errors }) => (
                <Form>
                  <Field type="name"
                    name="firstname"
                    placeholder="First Name"
                    className={`form-control border  ${touched.firstname && errors.firstname ? 'error' : ''}`} />
                  <ErrorMessage name="firstname" component="div" />
                  {""}
                  <Field type="name"
                    name="lastname"
                    placeholder="Last Name"
                    className={`form-control border  ${touched.lastname && errors.lastname ? 'error' : ''}`} />
                  {""}
                  <ErrorMessage name="lastname" component="div" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className={`form-control border  ${touched.email && errors.email ? 'error' : ''}`} />
                  {""}
                  <ErrorMessage name="email" component="div" />
                  <Field
                    type="password"
                    className={`form-control border  ${touched.password && errors.password ? 'error' : ''}`}
                    name="password"
                    placeholder="Enter Password"
                  />
                  {""}
                  <ErrorMessage name="password" component="div" />
                  <div className="btn6">
                    <button type='submit'>REGISTER</button>
                  </div>
                </Form>
              )}
            </Formik>

          </div>
          <div className="sign-up-title">
            <h1>Already have an account?<Link to='/login'>Login</Link></h1>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Register
