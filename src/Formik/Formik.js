import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import classes from './Formik.module.css';
import { TextField } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Error from './Error/Error';
// the keys here should be the same as the values as the initialValues we give to Formik
const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required').min(6),

})
const FormikForm = () => {
    return (
        //Formik always takes an initialValues object, each of these will corolate with each input field
        //values is the object in which all of the initialValues stay. Formik finds these values associaited with the name prop
        //the validationSchema we pass in will populate the errrors object given to us by Formik
        <Formik initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log('submitted form')
                setSubmitting(true)

                setTimeout(() => {
                    console.log(values)
                    setSubmitting(false)
                    resetForm();
                }, 500)
            }}>
            {({ values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }) => (
                    <div className={classes.Container}>
                        <div>Formik Example</div>
                        <form className={classes.FormContainer} onSubmit={handleSubmit}>
                            <div className={classes.TextField}>
                                <TextField
                                    type='text'
                                    name='email'
                                    id="email"
                                    placeholder='email'
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <Error touched={touched.email} message={errors.email} />
                            {/* {touched.email && errors.email ? 'Email is required' : null} */}
                            <div className={classes.TextField}>
                                <TextField
                                    id="password"
                                    type='password'
                                    name='password'
                                    placeholder='password'
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <Error touched={touched.password} message={errors.password} />
                            {/* {touched.password && errors.password ? 'Password is required' : null} */}
                            <Button
                                disabled={isSubmitting}
                                type='submit'
                                variant="contained">Default</Button>
                        </form>
                        <br />
                        {JSON.stringify(values, null, 2)}
                    </div>
                )}
        </Formik>
    );
};

export default FormikForm;