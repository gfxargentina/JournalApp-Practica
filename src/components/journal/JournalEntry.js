import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer" >
            <div className="journal__entry-picture"
                 style={{
                     backgroundSize: 'cover',
                     backgroundImage: 'url(https://i.pinimg.com/originals/47/4e/a1/474ea1fce99a97e7bc5e6eaf8d49b76c.jpg)'
                 }}
             >

            </div>
            <div className="journal__entry-body" >
                <p className="journal__entry-title" >
                    un nuevo dia
                </p>
                <p className="journal__entry-content" >
                    Lorem, ipsum dolor sit amet consectetur 
                </p>
            </div>

            <div className="journal__entry-date" >
                <span>Lunes</span>
                <h4>28</h4>

            </div>
            
        </div>
    )
}
