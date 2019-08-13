import React, {Component} from 'react'
import axios from 'axios'
import { Redirect} from "react-router-dom";

export default class TodoRegister extends Component {

    constructor(){
        super()
        console.log("TodoRegister constructor")
        this.state = {title:'', move:false}
    }

    clickAdd = (e) => {
        console.log("click add..........")

        axios.post("http://192.168.41.80:8080/todo/new", {title:this.state.title, complete:false})
        .then(res => {
            console.log(res)
            this.setState({move:true})
        })

    }

    render() {
        return(
        <div>
            {this.state.move == true?  <Redirect to="/todoList/1"></Redirect> :
            <div>
                <input type='text' onChange={(e) => {this.state.title = e.target.value}} ></input>
                <button onClick={this.clickAdd}>ADD</button>
            </div>
            }
        </div>
        )
    }
}