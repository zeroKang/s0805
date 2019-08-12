import React,{Component} from 'react'
import TodoList from './TodoList';
import TodoInput from './TodoInput';

export default class Todo extends Component{

    static count = 0        

    constructor(){
        super()        
        this.state = {
            todos:[]
        }
    }

    changeComplete = (tno) => {
        
        const target = this.state.todos.filter(obj => obj.tno === tno)[0]
        const index = this.state.todos.indexOf(target)

        const tempArr = this.state.todos

        tempArr[index] = Object.assign(target, {complete: !target.complete})

        console.log(tempArr)

        this.setState({todos:tempArr})

    }

    addTodo = (title) => {
        const arr = this.state.todos
        arr.push({tno:++Todo.count,title:title, complete:false})
        this.setState(
            {todos:arr}
        )
    }

    render(){
        return(
            <div style={BackGround}>
                <h1>Todo</h1>
                <TodoInput add={this.addTodo}></TodoInput>
                <TodoList todos={this.state.todos} change={this.changeComplete}></TodoList>
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

