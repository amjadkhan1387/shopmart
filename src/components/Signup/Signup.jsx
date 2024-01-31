import React from 'react'
import './Signup.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { PostApi } from '../../ApiClient/PostApi';
import { register } from '../../Utils/urls';
import { error_toaster, error_toastr, success_toaster, success_toastr } from '../../Utils/Toaster';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loader from '../../loader/Loader';
import { useEffect } from 'react';
export const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem("loginStatus") == "1"){
      navigate("/")
    }
  },[])
  const formik = useFormik({
    initialValues: {
      email: '',
      lastName: '',
      password: '',
      firstName: '',

    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      firstName: Yup.string().required('Required'),

    }),

    onSubmit: async (values) => {
      setLoading(true)
      console.log(values);

      let response = await PostApi(register, values);
      console.log(response);
      if (response.data.status == "1") {
        success_toaster("Registered successfully");
        localStorage.setItem('accessToken', response?.data?.token);
        localStorage.setItem('userId', response.data?.user?.id);
        localStorage.setItem('uuid', response.data?.user?.uuid);
        localStorage.setItem('first_name', response.data?.user?.first_name);
        localStorage.setItem('last_name', response.data?.user?.last_name);
        localStorage.setItem("loginStatus", "1");
        setLoading(false)
        navigate("/");
      }
      else {
        setLoading(false)
        error_toaster("Something went wrong! Please try again");

      }
    },
  });
  return (
    <div className='signup-modal'>
      <div className="signup-modal-content">
        <h1 className="signup-modal-title">Marketplace Signup</h1>
        <div className="role-buttons mb-3">
          {/* <button className="me-3">Buyer Signup</button> */}
          {/* <button>Seller Signup</button> */}
        </div>

        {
          loading ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div> : <form onSubmit={formik.handleSubmit} className="signup-form">

            <div className="form-group">
              <input onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName} name='firstName' type="text" placeholder='First Name' />
              {formik.touched.firstName && formik.errors.firstName && (
                <div style={{ color: "red" }}>{formik.errors.firstName}</div>
              )}
            </div>

            <div className="form-group">
              <input onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName} name='lastName' type="text" placeholder='Last Name' />
              {formik.touched.lastName && formik.errors.lastName && (
                <div style={{ color: "red" }}>{formik.errors.lastName}</div>
              )}
            </div>
            <div className="form-group">
              <input onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} name='email' type="text" placeholder='Email Address' />
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <input onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password} name='password' type="password" placeholder='password' />
              {formik.touched.password && formik.errors.password && (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              )}
            </div>



            <div className="form-group">
              <button type="submit" className="signup-btn">Sign Up</button>
            </div>
          </form>
        }

      </div>
    </div>
  )
}
