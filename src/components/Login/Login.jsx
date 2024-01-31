import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { PostApi } from '../../ApiClient/PostApi';
import { login } from '../../Utils/urls';
import { error_toaster, success_toaster } from '../../Utils/Toaster';
import Loader from '../../loader/Loader';
export const Login = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      setLoading(true)
      let response = await PostApi(login, {
        email: values.email,
        password: values.password
      });
      console.log(response);
      if (response.data.status == "1") {
        setLoading(false)
        success_toaster("Login successfully");
        localStorage.setItem('accessToken', response?.data?.token);
        localStorage.setItem('userId', response.data?.user?.id);
        localStorage.setItem('uuid', response.data?.user?.uuid);
        localStorage.setItem('first_name', response.data?.user?.first_name);
        localStorage.setItem('last_name', response.data?.user?.last_name);
        localStorage.setItem("loginStatus", "1");
        navigate("/");
      }
      else {
        setLoading(false)
        error_toaster("Something went wrong! Please try again");
      }

    },
  });
  return (
    <div className="login-container">
    {
      loading ? <div style={{display:"flex",justifyContent:"center"}}><Loader/></div>: <div>
      <h1 className="login-title">Login</h1>
       <form onSubmit={formik.handleSubmit} className="login-form">
         <div className="form-group">
           <input onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.email} name='email' type="email" id="email" placeholder='Email' />
           {formik.touched.email && formik.errors.email && (
             <div style={{ color: "red" }}>{formik.errors.email}</div>
           )}
         </div>
 
 
 
         <div className="form-group">
           <input onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.password} name='password' type="password" id="password" v-model="loginDetails.password" placeholder="Password" />
           {formik.touched.password && formik.errors.password && (
             <div style={{ color: "red" }}>{formik.errors.password}</div>
           )}
         </div>
 
 
 
         <div className="form-group">
           <button type="submit" className="login-btn">Login</button>
         </div>
 
         <div className="additional-options">
           <p>Don't have an account? <a><Link to='/signup'>Sign up</Link></a></p>
           <p><a><Link to='/reset'>Forgot your password?</Link></a></p>
         </div>
       </form>
      </div>
    }
    </div>
  );
};
