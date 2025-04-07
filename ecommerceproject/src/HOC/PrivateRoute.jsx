import { useContext, useEffect, useState } from "react"
import AuthContext from "../contexts/auth-context";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
    const { authToken } = useContext(AuthContext);

    return authToken ? children : <Navigate to={'/login'} />
}

export default PrivateRoute