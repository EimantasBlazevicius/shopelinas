import * as React from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";

import {db, auth} from "../firebase";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";


const provider = new GoogleAuthProvider();
const UserContext = React.createContext();


function UserProvider({children}) {
    const [user, setUser] = React.useState();
    const [loggedIn, setLoggedIn] = React.useState();
    const [userData, setUserData] = React.useState([]);

    const getUserData = async (uid) => {
      let listsList = []
      const q = query(collection(db, "data"), where("uid", "==", uid));
  
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        listsList = [...listsList, doc]
        
      });
      setUserData(listsList);
    };

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            setLoggedIn(true);
            getUserData(user.uid);
          } else {
            setLoggedIn(false);
            setUser()
          }
        });
      }, [user]);
    

    const handleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);

            const q = query(collection(db, "users"), where("uid", "==", result.user.uid));
            getDocs(q).then(docs => {
                if (docs.docs.length === 0) {
                    addDoc(collection(db, "users"), {
                      uid: result.user.uid,
                      name: result.user.displayName,
                      authProvider: "google",
                      email: result.user.email,
                    });
                  }
            });
            
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleLogOut = () =>{
        signOut(auth).then(() => {
            setUser({});
           }).catch((error) => {
             console.log('can not log out', error)
           });
    }

    return <UserContext.Provider value={{user,loggedIn, handleLogin, handleLogOut, userData, getUserData}}>{children}</UserContext.Provider>
}

function useUser() {
    const context = React.useContext(UserContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

export {UserProvider, useUser};