import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import { JournalApp } from '../JournalApp';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                      path="/auth"
                      component={ AuthRouter }  
                     />

                    <Route 
                      path="/" 
                      component={ JournalApp }
                      />

                </Switch>
            </div>
        </Router>
    )
}
