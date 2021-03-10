import React from 'react';
import { Link } from 'react-router-dom';


export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title" >Crear nueva cuenta</h3>
            <form action="">
            <input 
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="password"
                    placeholder="contraseña"
                    name="password"
                    className="auth__input"
                    />

                <input 
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="passwordConfirm"
                    className="auth__input"
                    />    

                <button 
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                     > 
                    Registrar </button>    

                
                
                <Link to="/auth/login" 
                      className="link"   
                >
                    Ya esta registrado?
                </Link>
            </form>

        </>
    )
}
