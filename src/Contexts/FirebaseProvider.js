import React, { createContext, useContext } from 'react'
import app from "../environment";//ensure your firebase configuration is correct

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
    return (
        <FirebaseContext.Provider value={app}>
            {children} {/* Render children passed to the provider */}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider