import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'


export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );
    //console.log(note)
    const  [formValues, handleInputChange, reset ]  = useForm( note );
    //console.log(formValues);

    const { body, title } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {
    //si el note.id es diferente al activeId.current entonces  
    //se resetea el formulario  
        if ( note.id !== activeId.current ) {
            reset( note );
            //establece un nuevo valor al activeId
            activeId.current = note.id;
        }
    }, [note, reset])

    //este efecto sirve para editar la nota, si el titulo/body
    //cambia este efecto lo muestra en el state
    useEffect(() => {
        //console.log(formValues)
        dispatch( activeNote( formValues.id, {...formValues }));
    }, [formValues, dispatch])

    return (
        <div className="notes__main-content" >
            <NotesAppBar />

            <div className="notes__content" >
                <input 
                    type="text"
                    placeholder="un titulo asombroso"
                    className="notes__title-input"
                    name="title"
                    value={title}
                    onChange={ handleInputChange }
                    />
                <textarea 
                    placeholder="Que paso hoy" 
                    className="notes__textarea"
                    name="body"
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
