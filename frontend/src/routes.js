
import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident'


export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
            
                <Route path= "/" exact component={LandingPage}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
                
            </Switch>
        </BrowserRouter>
    )
}