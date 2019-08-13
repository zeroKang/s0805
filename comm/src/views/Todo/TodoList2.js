import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import axios from 'axios'

const User = ({ match }) => <p>{match.params.page}</p>

export default class TodoList2 extends Component {
    
    constructor(props){
        super(props)
        console.log("constructor....todoList2")
        this.state = {
            content:[],
            totalPages:0,
            loaded:false
        }    
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.getData(this.props.match.params.page|| 1)
    }

    getData = (page) => {        
        
        axios.get("http://192.168.41.80:8080/todo/pages/"+page)
        .then(res => {
            console.log(res.data)
            this.setState( Object.assign( {},res.data,{loaded:true})  )
            
        })        
    }

    render() {
        console.log("render.................")

        console.log(this.props)

        const {content,totalPages, loaded} = this.state

        const list = content.map( ({tno,title}) => {
            return (<li key={tno}>{title}</li>)
        } )
        
        return(
            <div>
                <ul>
                <li>
                    <a href="/todoList2/1">Page 1 </a>
                </li>
                <li>
                    <a href="/todoList2/2">Page 2 </a>
                </li>
                <li>
                    <a href="/todoList2/3">Page 3 </a>
                </li>
                </ul>

                <ul>
                    {list}
                </ul>

                <Route path="/todoList2/:page" component={User} />
        </div>
        )
    }    
}