import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/context";
import Loader from "../Loader/Loader";
import { privateRoutes, publicRoutes } from "./routs";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {isLoading, setLoading} = useContext(AuthContext);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/photos" />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => 
                    <Route
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/signIn" />} />
            </Routes>
    )
};

export default AppRouter;