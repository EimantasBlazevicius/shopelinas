import * as React from 'react';
import { useUser } from "./user-context";
import { db, auth } from './../firebase';
import { collection, addDoc, getDoc, getDocs,query,where, deleteDoc, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const DataContext = React.createContext();



function DataProvider({children}) {
    const [currentList, setCurrentList] = React.useState(0);
    const [currentItems, setCurrentItems] = React.useState([]);
    const { user, getUserData } = useUser();
    const [publicLists, setPublicLists] = React.useState([])
    let currentDate = new Date().toJSON().slice(0, 10);

    const Data = {
        createList: (name, isPublic, uid) => {
            addDoc(collection(db, "data"), {
                uid: uid,
                name: name,
                isPublic: isPublic,
                createdDate: currentDate,
                items: []
              });
              getUserData(uid)
        },
        deleteList: async (idToDelete) => {
            await deleteDoc(doc(db, "data", idToDelete));
            getUserData(user.uid)
        },
        createListItem: async (title, description) => {
            const currentDocumentRef = doc(db, "data", currentList);

            await updateDoc(currentDocumentRef, {
                items: arrayUnion({title, description})
              });
        },
        deleteListItem: async (title, description) => {
            const currentDocumentRef = doc(db, "data", currentList);

            await updateDoc(currentDocumentRef, {
                items: arrayRemove({title, description})
              });
        },
        getListItems: async() => {
            if (currentList){
                const docRef = doc(db, "data", currentList);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setCurrentItems([...docSnap.data().items]);
                } else {
                    console.log("No such document!");
                }
            }
        },
        getPublicLists: async() => {
            let tempPublicList = []
            const q = query(collection(db, "data"), where("isPublic", "==", true));
            getDocs(q).then(docs => {
                docs.docs.forEach(doc =>{
                    tempPublicList.push(doc)
                })
            });
            
            setPublicLists(tempPublicList);
        },
        copyList: (item) => {
            console.log(item)
            console.log(user)
            addDoc(collection(db, "data"), {
                uid: user.uid,
                name: item.name,
                isPublic: false,
                createdDate: item.createdDate,
                items: item.items
              });
              getUserData(user.uid)
        },
    }
       
    return <DataContext.Provider value={{Data, currentList, setCurrentList, currentItems, setCurrentItems, publicLists}}>{children}</DataContext.Provider>
}

function useData() {
    const context = React.useContext(DataContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

export {DataProvider, useData};