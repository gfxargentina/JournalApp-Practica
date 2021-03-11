import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content" >
            <NotesAppBar />

            <div className="notes__content" >
                <input 
                    type="text"
                    placeholder="un titulo asombroso"
                    className="notes__title-input"
                    />
                <textarea 
                    placeholder="Que paso hoy" 
                    className="notes__textarea"
                    >
                    </textarea>  
                <div className="notes__image" >
                    <img src="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg" 
                         alt="imagen"
                    />
                </div>      
            </div>

        </div>
    )
}
