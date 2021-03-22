import { db } from "../firebase/firebase-config";


export const startNewNote = () => {
    return async( dispatch, getState ) => {
        //desestructuracion, extraigo uid de auth
        const { uid } = getState().auth;
        //console.log( uid );
        const newNote = { 
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );
        console.log(doc)

    }
}