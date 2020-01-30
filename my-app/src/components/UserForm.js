import React from 'react';
import {withFormik, Form, Field} from 'formik';
import *as Yup from 'yup';
import axios from 'axios';


const UserForm = () =>{



    return(
        <div>
            <Form> 
                <label htmlFor = "name">
                  Name
                  <Field
                  id = "name"
                  type = "text"
                  name = "name"
                  placeholder = "name" />

                </label>
                <label htmlFor = 'email'>
                  Email
                  <Field
                   id = "email"
                   type = "email"
                   name = "email"
                   placeholder = "email" />

                </label>
                <label htmlFor = 'password'>
                  Password
                  <Field
                   id = "password"
                   type = "password"
                   name = "password"
                   placeholder = "password" />

                </label>
                <label htmlFor = 'terms'>
                  Term of Service
                  <Field
                   id = "terms"
                   type = "checkbox"
                   name = "terms"
                //    placeholder = "" 
                />


                </label>
                <button>Submit</button>


            </Form>

            {/* Name
            Email
            Password
            Terms of Service (checkbox)
            A Submit button to send our form data to the server. */}

        </div>
    )
}

export default FormikUserForm;