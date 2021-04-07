//el reducer es una funcion pura

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {
    switch (action.type) {
               
        case types.notesActive:
            return { 
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesLoad:
            //para ver que estamos recibiendo
            //console.log(action.payload)
            return { 
                ...state,
                notes: [ ...action.payload ]
            }  
        
        case types.notesUpdate:
            return { 
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id
                        ? action.payload
                        : note
                )
            }
       
        case types.notesDelete:
            //para saber si el id le esta llegando al payload
            //console.log(action.payload)
            return { 
                ...state,
                active: null,
                notes: state.notes.filter( note => note.id !== action.payload )
                }    
        default:
            return state;
    }

}