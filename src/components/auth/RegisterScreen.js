import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';


export const RegisterScreen = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const {name, email, password, passwordConfirm} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, passwordConfirm);

        if ( isFormValid() ) {
            console.log('Formulario Correcto')
        }
    }

    const isFormValid = () => {
        if ( name.trim().length === 0 ) {
            console.log('El nombre es requerido');
            return false;
        } else if ( !validator.isEmail(email) ) {
            console.log('El email no es valido');
            return false
        } else if ( password !== passwordConfirm || password.length < 5 ) {
            console.log('La contraseña tiene que tener mas de 5 caracteras y deben ser iguales');
            return false

        }

        return true
    }



    return (
        <>
            <h3 className="auth__title" >Crear nueva cuenta</h3>
            <form onSubmit={handleRegister}>
                <div className="auth__alert-error">
                    Formulario no valido                    
                </div>
            <input 
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="contraseña"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={ handleInputChange }
                    />

                <input 
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="passwordConfirm"
                    className="auth__input"
                    value={passwordConfirm}
                    onChange={ handleInputChange }
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
