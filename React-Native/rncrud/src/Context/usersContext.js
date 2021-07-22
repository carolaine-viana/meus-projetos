import React, {createContext} from 'react';
import users from '../data/users';

const UsersContext = createContext({}) //criei um contexto e passei um obj vazio

//tudo que eu passar dentro do provider vai ser renderizado no props.children
//


export const UsersProvider = props => {
    return(
        <UsersContext.Provider value={{state: users}}> 
            {props.children} 
        </UsersContext.Provider>
    )
}

export default UsersContext;