import { useContext } from "react";
import { authContext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";

const PrivateRoute = ({children}) => {

    const location = useLocation()
    const {user,loading} = useContext(authContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;