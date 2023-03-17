import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast({flash}){
    useEffect(() => {
        flash.message && toast.success(flash.message)
    }, [flash]);
    return (
        <ToastContainer />
    );
}
