import React, { useState } from 'react';
import LoginRender from "./LoginRender.tsx";
//Importing types
import { User } from "./DataTypes.ts";

const Login = () => {
    //Defining the state
    const [user, setUser] = useState<User>({email:'', password:''});
    
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