import React from 'react';
import LoginRender from "./LoginRender.tsx";


const Login = () => {

    const handleObSubmitEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("sending", e)
    }
    return ( <LoginRender handleOnSubmit={handleObSubmitEvent} /> );
}
 
export { Login };