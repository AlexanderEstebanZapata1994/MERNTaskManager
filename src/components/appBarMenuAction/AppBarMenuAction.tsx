import React from 'react';
import AppBarMenuActionRender from "./AppBarMenuActionRender";
import { useHistory } from 'react-router-dom';

const AppBarMenuAction = () => {
    let history = useHistory();
    const handleOnLogout = (e: React.MouseEvent<HTMLElement>) => {
        history.push("/")
    }
    return ( <AppBarMenuActionRender OnClickLogoutEvent={handleOnLogout} /> );
}
 
export {AppBarMenuAction};