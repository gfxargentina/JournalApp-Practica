import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
// import { MainNothingSelected } from './MainNothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content" >
            <Sidebar />

            <main  >
                {/* <MainNothingSelected /> */}
                <NoteScreen />
            </main>
        </div>
    )
}
