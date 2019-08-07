import React,{Component} from 'react'
import TodoList from './TodoList';
import TodoInput from './TodoInput';

export default class Todo extends Component{

    static count = 3        

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
    addTodo = (title) => {
        const arr = this.state.todos
        arr.push({tno:++Todo.count,title:title})
        this.setState(
            {todos:arr}
        )
    }

    render(){
        return(
            <div style={BackGround}>
                <h1>Todo</h1>
                <TodoInput add={this.addTodo}></TodoInput>
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

