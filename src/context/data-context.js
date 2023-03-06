import * as React from 'react';
import { useUser } from "./user-context";
import { db, auth } from './../firebase';

const DataContext = React.createContext();



function DataProvider({children}) {
    const { user } = useUser();
    user && console.log(user.uid);
    return <DataContext.Provider value={{}}>{children}</DataContext.Provider>
}

function useData() {
    const context = React.useContext(DataContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

export {DataProvider, useData};