import { useContext, useEffect, useState } from "react"
import AuthContext from "../contexts/auth-context";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import ToastMsg from "../components/Toast";

const PrivateRoute = ({ children }) => {
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        if(!authToken) {
            toast(<ToastMsg message={"Login to access this feature"} />)
        }
    }, [ authToken ]);


    return authToken ? children : <Navigate to={'/login'} />
}

export default PrivateRoute