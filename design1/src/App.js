import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Main from './views/Main'
import Todo from './views/Todo'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ConditionLink from './utils/ConditionLink'

export default class App extends Component {

  constructor(){
    super();
    this.state = {user:{userid:"user00"}}
  }

  render() {

    const user = this.state.user

    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </nav>
      <div>
        <Route path="/" exact component= {Main}></Route>
        <Route path="/todo/:tno" component= {Todo}></Route>
  
        <ConditionLink condition={()=> user != null }>
          <Main></Main>
        </ConditionLink>
  
      </div>
      </Router>
    ) 
  }

}


