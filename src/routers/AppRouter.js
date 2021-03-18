import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();
    //mientras el estado sea true no muestra nada de la app,
    //para saber si esta autenticado o no
    const [checking, setChecking] = useState(true)

    const [ isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {
         firebase.auth().onAuthStateChanged((user) =>{
        // ?= si el objeto user tiene algo pregunta si existe el uid 
        //  si no existe, el user es null, la condicion se va a salir
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ));
                //si entra la condicion de arriba esta logueado de manera correcta
                setIsLoggedIn(true)
             //caso contrario  
            } else {
                setIsLoggedIn(false)
            }
            //esta autenticado
            setChecking(false)
         });
    }, [dispatch, setChecking, setIsLoggedIn])

    //si checking es true devuelve h1
    if ( checking ) {
        return (
            <h1>Espere 1 minuto..</h1>
            )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                      isAuthenticated={ isLoggedIn } 
                      path="/auth"
                      component={ AuthRouter }  
                     />

                    <PrivateRoute 
                      exact 
                      //si esta autenticado entonces isLoggedIn
                      isAuthenticated={ isLoggedIn } 
                      path="/" 
                      component={ JournalScreen }
                      />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
