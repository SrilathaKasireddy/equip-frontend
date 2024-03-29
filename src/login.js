import {
 Typography,
 Button,
 
} from '@mui/material'

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";

import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { API } from './global.js';
import { useState } from 'react';


export function Login() {
 
 const navigate=useNavigate();
 const[errorMsg,setErrorMsg]=useState("");
 const entry=()=>navigate("/");

 const loginUser =(userDetail) => {
   fetch(`${API}/login`,{
   method: "POST",
   body: JSON.stringify(userDetail),
   headers: {
     "Content-Type" : "application/json",
   },
 }).then((data)=>data.json())
 .then((data1)=>{
     console.log(data1);
     if(data1.message==="successful login"){
         entry();}
     else {
         setErrorMsg(data1.message);
     }
 });
 

 };
 const initialValues = {
   UserName: '',
   Password: '',
 }
 const userValidationSchema = Yup.object({
     UserName: Yup.string().required('Required'),
     Password: Yup.string().required('Required'),
 })
 
 const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
   initialValues:initialValues,
   validationSchema:userValidationSchema ,
   onSubmit:(userDetail)=>{
     console.log("onSubmit",userDetail);
     loginUser(userDetail);
   },
 });
 
 return <div className="add-user-container">
 <form  
 onSubmit={handleSubmit}
 className="add-user-form" >
   <Typography variant="h4" pb={2}
 sx={{
   textAlign: 'center',
 }}>
  Login Details
 </Typography>
   
   <TextField
   className="add-user-name"
   label="User Name"
   type="text"
   value={values.UserName} 
   name="UserName"
   onChange={handleChange}
   onBlur={handleBlur}
   error={touched.UserName&&errors.UserName?true:false}
   helperText={touched.UserName&&errors.UserName?errors.UserName:""}
   />
   <TextField
   className="add-user-name"
   label="Password"
   type="password"
   value={values.Password} 
   name="Password"
   onChange={handleChange}
   onBlur={handleBlur}
   error={touched.Password&&errors.Password?true:false}
   helperText={touched.Password&&errors.Password?errors.Password:""}
   />
    <Button className="add-user-btn" 
     color="primary"
   type="submit"
   variant="contained">Login</Button>
   <div className="text-center" style={{color:"red"}}>
 {errorMsg}
 </div>
   <div className="text-center" style={{color:"blue"}}>
     <Button  onClick={() => navigate("/Register")}  className="small" >SignUp</Button>
 </div>
 <div className="text-center" style={{color:"blue"}}>
     <Button  onClick={() => navigate("/ForgetPassword")}  className="small" >ForgetPassword</Button>
 </div>
 </form> 
</div>;
}
