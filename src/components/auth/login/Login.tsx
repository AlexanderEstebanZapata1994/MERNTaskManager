import React, { useState } from 'react';
import LoginRender from "./LoginRender";
//Importing types
import { User, userInitialState } from "../../../types";

const Login = () => {
    //Defining the state
    const [user, setUser] = useState<User>(userInitialState);
    
    const handleOnSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        //Validate no empty fields

        //Pass the action to the reducer

    }

    const handleOnChange = (user : User) => {
        console.log("user", user)
    }
    return ( <LoginRender 
                onSubmitEvent={handleOnSubmitEvent} 
                onChangeEvent={handleOnChange} 
                user={user}
                setUser={setUser}
            /> 
    );
}
 
export { Login };