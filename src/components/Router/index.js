import React from 'react'
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import StorePicker from '../StorePicker'
import NotFound from '../NotFound'


const Router = ()=>(
    <BrowserRouter>
       <Switch>
           <Route exact path ='/' component={StorePicker}/>
           <Route component={NotFound}/>
       </Switch>
    </BrowserRouter>
)
export default Router