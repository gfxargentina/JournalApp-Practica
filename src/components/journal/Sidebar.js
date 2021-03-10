import React from 'react'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar" >
            <div className="journal__sidebar-navbar" >
                <h3 className="mt-5" >
                    <i className="far fa-moon" ></i>
                    <span>Luis</span>
                </h3>

                <button className="btn" >
                    Salir
                </button>
            </div>

            <div className="journal__new-entry mt-5" >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>Nueva Entrada</p>

            </div>
        </aside>
    )
}
