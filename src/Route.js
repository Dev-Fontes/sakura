import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Cartao } from './components/Workspace'
import NewsCard from './components/Patterns/Cards'
import {Home} from './components/home'

export const Routes = () =>{
    return(
    <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Cartao" component= {Cartao} exact />
          <Route path="/resultado" component= {NewsCard} />
          <Route component={ ()=> <div>ERROR 404!</div>} />
    </Switch>
    )
}
