import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';


export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );
    
    const handleSave = () => {
        //console.log(active)
        dispatch( startSaveNote( active ));
    }

    return (
        <div className="notes__appbar">
            <span>11 de Marzo de 2021</span>
            <div>
                <button className="btn" >
                    Imagen
                </button>
                <button className="btn"
                    onClick={ handleSave }
                >
                    Guardar
                </button>

            </div>
        </div>
    )
}
