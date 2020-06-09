import React from 'react';
import NewAccountRender from "./NewAccountRender";

import { User, userInitialState } from "../../../types";
 
const NewAccount = () => {

    const [newUser, setNewUser] = React.useState<User>(userInitialState)
    return ( 
        <NewAccountRender
            onChangeEvent={() => {}}
            onSubmitEvent={() => {}}
            user={newUser}
            setUser={setNewUser}
        /> );
}
 
export { NewAccount };