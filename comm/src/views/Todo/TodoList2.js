import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import axios from 'axios'
import { async } from 'q';

class ListComponent extends Component {
    constructor(){
        super()
        console.log("--------")
    }

    async getServerData(page) {
        return await axios.get("http://192.168.41.80:8080/todo/pages/"+page).then((data)=>{
            return data
        })        
    }

    render(){

        console.log("list ListComponent render.................")
        const page = this.props.match.params.page
        

        const syncFn = () => {

            return this.getServerData(page).then( result => {
                return result.data.content
            })
        }
        let data =syncFn()
        console.log(data)
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")  
        
        
        (async () => {
            let arr= []
            await data.then( obj => {
                arr.push(<h1>AAA</h1>)
            })
            return arr
        })()        

        return null
        
    }
}

export default class TodoList2 extends Component {
    
    constructor(props){
        super(props)
        console.log("constructor....todoList2")
 
    }

    componentDidMount() {
        console.log("componentDidMount")
    }


    render() {
        

        
        return(
            <div>
                <ul>
                <li>
                    <Link to="/todoList2/1">Page 1 </Link>
                </li>
                <li>
                    <Link to="/todoList2/2">Page 2 </Link>
                </li>
                <li>
                    <Link to="/todoList2/3">Page 3 </Link>
                </li>
                </ul>

                <Route path="/todoList2/:page" component={ListComponent} />
        </div>
        )
    }    
}