import React from 'react';
import classes from './Error.module.css';
const Error = ({ touched, message }) => {

    if (!touched) {
        return <div className={classes.FormMessageInvalid}></div>  
    } 
    if (message) {
        return <div className={classes.FormMessageInvalid}>{message}</div>  
    } 
    else {
        return <div className={classes.FormMessageValid}>All good </div>
    }

};



export default Error;