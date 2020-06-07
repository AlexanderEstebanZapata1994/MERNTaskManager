import React from 'react';

export interface LoginProps {
    classes: any
}
 
const Login: React.SFC<LoginProps> = ({classes}) => {
    return ( <h1>From Login</h1> );
}
 
export { Login };