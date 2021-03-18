import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        //console.log("logout")
        dispatch( startLogout() );
    }

    return (
        <aside className="journal__sidebar" >
            <div className="journal__sidebar-navbar" >
                <h3 className="mt-5" >
                    <i className="far fa-moon" ></i>
                    <span>Luis</span>
                </h3>

                <button className="btn"
                        onClick={ handleLogout }
                >
                    Salir
                </button>
            </div>

            <div className="journal__new-entry mt-5" >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>Nueva Entrada</p>

            </div>

            <JournalEntries />


        </aside>
    )
}
