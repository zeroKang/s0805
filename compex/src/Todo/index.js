import React,{Component} from 'react'
import TodoList from './TodoList';

export default class Todo extends Component{

    constructor(){
        super()
        this.state = {
            todos:[
                {tno:1, title:'Todo1'},
                {tno:2, title:'Todo2'},
                {tno:3, title:'Todo3'},
            ]
        }
    }

    render(){
        return(
            <div style={BackGround}>
                <h1>Todo</h1>
                <TodoList todos={this.state.todos}></TodoList>
            </div>
        )
    }

}
const BackGround = {
    backgroundColor:'yellow',
    display:'flex',
    height:'20em',
    flexDirection:'column'
}

