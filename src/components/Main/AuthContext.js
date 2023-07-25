import React, {useState, useEffect} from "react";

const AuthContext = React.createContext(
    {
        isLoggedIn: false,
    }
)

export function AuthContextProvider(props){

    return <AuthContext.Provider value={{}}>
        {props.children}
    </AuthContext.Provider>

}