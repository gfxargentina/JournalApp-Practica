import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'


export const NoteScreen = () => {

    const { active:note } = useSelector( state => state.notes );
    //console.log(note)
    const  [formValues, handleInputChange]  = useForm( note );
    //console.log(formValues);

    const { body, title } = formValues;

    return (
        <div className="notes__main-content" >
            <NotesAppBar />

            <div className="notes__content" >
                <input 
                    type="text"
                    placeholder="un titulo asombroso"
                    className="notes__title-input"
                    value={title}
                    onChange={ handleInputChange }
                    />
                <textarea 
                    placeholder="Que paso hoy" 
                    className="notes__textarea"
                    value={ body }
                    onChange={ handleInputChange }
                    >
                    </textarea> 
                     
                {//si la url de la imagen existe entonces mostrarla
                 //si no existe no mostrar nada   
                    (note.url) ?? (
                        <div className="notes__image" >
                            <img src="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg" 
                                    alt="imagen"
                            />
                        </div>
                    )
                }      
            </div>

        </div>
    )
}
