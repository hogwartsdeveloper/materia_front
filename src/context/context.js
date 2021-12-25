import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
            setLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
};