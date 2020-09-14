import React, { createContext, useContext, useReducer} from 'react';

// Prepares the datalayer
export const StateContext = createContext();


// Wrap  app & provide data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}

    </StateContext.Provider>
);

// Pull infomation from data layer
export const useStateValue = () => useContext(StateContext);