import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routs";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route => 
                <Route
                    path={route.path}
                    element={route.component}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
    )
};

export default AppRouter;