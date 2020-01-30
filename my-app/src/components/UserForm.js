import React, { useState, useEffect } from 'react';
import {withFormik, Form, Field} from 'formik';
import *as Yup from 'yup';
import axios from 'axios';


const UserForm = ({values, errors, touched, status}) =>{

    //local state that holds successful form submission data
    const [users, setUsers] = useState([]);

    //listen for status changes to update animal state
    useEffect(() =>{
        status && setUsers(users => [...users,status])

    }, [status]);


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
                  {touched.name && errors.name && (
                    <p>{errors.name}</p>
                  )}
                </label>

                <label htmlFor = 'email'>
                  Email
                  <Field
                   id = "email"
                   type = "email"
                   name = "email"
                   placeholder = "email" />
                   {touched.email && errors.email && (
                    <p>{errors.email}</p>
                  )}
                </label>

                <label htmlFor = 'password'>
                  Password
                  <Field
                   id = "password"
                   type = "password"
                   name = "password"
                   placeholder = "password" />
                   {touched.password && errors.password && (
                    <p>{errors.password}</p>
                  )}
                </label>

                <label htmlFor = 'terms'>
                  Term of Service
                  <Field
                   id = "terms"
                   type = "checkbox"
                   name = "terms"
                   checked ={values.terms}/>
                </label>

                <button>Submit</button>
            </Form>
            {users.map(user =>{
                return(
                    <ul key = {user.id}>
                        <li>Name:{user.name}</li>
                        <li>Email:{user.email}</li>
                        <li>Password: {user.password}</li>
                        <li>terms: {user.terms}</li>
                    </ul>
                )
            })}
        </div>
    )
}

const FormikUserForm = withFormik({
    
 mapPropsToValues(props){
    //setting up initial state of form to value from parent component OR the initial value (after||) 
    return{
        name: props.name || "",
        email: props.email || "",
        password: props.password || "",
        terms: props.terms

    }
 }

})

export default FormikUserForm;