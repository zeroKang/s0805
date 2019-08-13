import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import Main from './views/Main'
import MyPage from './views/MyPage'
import TodoList from './views/Todo/TodoList'
import TodoList2 from './views/Todo/TodoList2'
import TodoRegister from './views/Todo/TodoRegister'

export default class App extends Component {

  constructor(){
    super()
    this.state = {page:1}
  }

  movePage = () => {
    console.log("movePage")
  }

  render(){
    return(
      
      <div>
        
        <Router>          
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>  
              <Link to="/mypage">MyPage</Link>
            </li>
            <li>
              <Link to="/todoList/1">TodoList</Link>
            </li>
            <li>
              <Link to="/todoList2">TodoList2</Link>
            </li>            

            <li>
              <Link to="/todoRegister">TodoRegister</Link>
            </li>            
          </ul>
        </nav>
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/todoList/:page" exact component={TodoList} />        
        <Route path="/todoRegister" exact component={TodoRegister} />
        <Route path="/todoList2" component={TodoList2} />
        </Switch>
        </Router>
      </div>
      
    )
  }
}
