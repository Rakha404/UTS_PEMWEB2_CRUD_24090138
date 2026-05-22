import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/UseAuthStore";

export default function ProtectedRoute (){
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    //jika isautheticated false, maka redirect ke halaman login
    if(!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    //jika authenticated true, maka render chidren
    return <Outlet />;
}