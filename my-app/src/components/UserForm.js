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
            <Form class= "form"> 
                <label class= "label" htmlFor = "name">
                 Name
                  <Field class = "field"
                  id = "name"
                  type = "text"
                  name = "name"
                  placeholder = "name" />
                  {touched.name && errors.name && (
                    <p>{errors.name}</p>
                  )}
                </label>

                <label class= "label" htmlFor = 'email'>
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

                <label class= "label" htmlFor = 'password'>
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

                <label class= "label" htmlFor = 'terms'>
                  Term of Service
                  <Field
                   id = "terms"
                   type = "checkbox"
                   name = "terms"
                   checked ={values.terms}/>
                   {touched.terms && errors.terms && (
                    <p>{errors.terms}</p>
                  )}
                </label>

                <button type = "submit">Submit</button>
            </Form>
            {users.map(user =>{
                return(
                    <div class= "user" key = {user.id}>
                        <p>Name:{user.name}</p>
                        <p>Email:{user.email}</p>
                        <p>Password: {user.password}</p>
                        <p>Term of Service: {user.terms}</p>
                    </div>
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
        terms: props.terms|| false

    };
 },
 //validation
 validationSchema: Yup.object().shape({
  name: Yup.string().min(2, 'No initials please!').required("Name is required"),
  
  email: Yup.string().email('Invalid email').required("Email is required"),
  password: Yup.string().min(4, 'Too Short!! 4 characters or more!').required("Password is required"),
  terms: Yup.bool().required("Must accept Terms of Service"),
 
}),

 //handleSubmit

 handleSubmit(values, { setStatus, resetForm}){
   axios
   .post("https://reqres.in/api/users/", values)
   .then(res =>{
     setStatus(res.data);
     resetForm()
   })
   .catch(err => console.log(err.response))
 }

})(UserForm)

export default FormikUserForm;