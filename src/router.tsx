import { Switch, Route, Redirect } from 'react-router-dom';

import {Home, Error404, Exams } from './pages'

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/> 
      <Route path="/exams" exact component={Exams}/>
      <Route path="/404" component={Error404} />
      <Redirect from ="*" to="/404" />
    </Switch>
  )
}
