import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";


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
        //console.log(doc)
        dispatch( activeNote( doc.id, newNote ));

    }
}

export const activeNote = ( id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = ( uid ) => {
    return async( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) )
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})

//guardar la nota
export const startSaveNote = ( note ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
       //si no viene la url de la imagen, entonces borrar la url
       //y no la manda
        if ( !note.url ){
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );

        dispatch( refreshNote( note.id, noteToFirestore ));
        Swal.fire('Guardado', note.title, 'success');
    }

}

export const refreshNote = ( id, note) => ({
    type: types.notesUpdate,
    payload: {
        id, 
        note: {
            id,
            ...note
        }
    }
})