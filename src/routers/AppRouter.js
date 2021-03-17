import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';


export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
         firebase.auth().onAuthStateChanged((user) =>{
        // ?= si el objeto user tiene algo pregunta si existe el uid 
        //  si no existe, el user es null, la condicion se va a salir
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ));
            }
         })
    }, [dispatch])


    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                      path="/auth"
                      component={ AuthRouter }  
                     />

                    <Route 
                      exact  
                      path="/" 
                      component={ JournalScreen }
                      />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
