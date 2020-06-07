import React from 'react';

export interface NewAccountProps {
    classes: any
}
 
const NewAccount: React.SFC<NewAccountProps> = ({classes}) => {
    return ( <h1>Desde NewAccount</h1> );
}
 
export { NewAccount };