import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import users from './users';

export const reducers = combineReducers({
    users : users,
    form : formReducer,
    routing: routerReducer,
});

export function reducerCall (state, action, reducerClass){
    const [, method] = action.type.split ('.');
    const methods = Object.getOwnPropertyNames (reducerClass).filter(name =>{
        if ('lenght' !== name && 'name' !== name && 'prototype' !== name){
            return name;
           //  console.log("true");
        }
    });

    if (methods.find(x => x === method)) {
        // console.log("true");
        // copy statenya 
        const new_state = cloneObject(state);
        // console.log("new_state",new_state);
        //return static method
        return reducerClass [method](new_state,action);
        
    }else{
        return state;
        // console.log("false");
    }

    function cloneObject (object) {
        return JSON.parse(JSON.stringify(object));
    }
}