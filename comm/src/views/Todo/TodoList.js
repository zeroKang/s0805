import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

export default class TodoList extends Component {
    
    static page = 0

    constructor(props){
        super(props)
        console.log("constructor....")
        this.state = {
            content:[],
            totalPages:0,
            loaded:false
        }
    }

    componentDidMount(){
        console.log("componentDidMount")
        const page = this.props.match.params.page
        this.getData(page)
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps.location.key != this.props.location.key)
        if (prevProps.location.key !== this.props.location.key) {
            const page = this.props.match.params.page
            console.log("componentDidUpdate:   " + page)
            this.getData(page)        
        }        
    }
    
    getData = (page) => {        
        this.setState({loaded:false})
        axios.get("http://192.168.41.80:8080/todo/pages/"+page)
        .then(res => {
            console.log(res.data)
            this.setState( Object.assign( {},res.data,{loaded:true})  )
            TodoList.page = page
        })        
    }


    render() {
        console.log("render.................")
        const page = this.props.match.params.page

        const {content,totalPages, loaded} = this.state

        const list = content.map( ({tno,title}) => {
            return (<li key={tno}>{title}</li>)
        } )

        const linkArr = []
        for(let i = 1; i <= totalPages; i++){
            linkArr.push(
            <Link to={`/todoList/${i}`} 
                key={i} > {i} </Link>
            )
        }

        
        return(
            <div>
                <h1>Todo List {page} {loaded?"END":"NOT YET"}</h1>
                {loaded == true?
                    <div>
                    <ul>
                        {list}
                    </ul>
                    <div>
                        {linkArr}
                    </div>
                    </div>
                : <h1>로딩중.....잠시 기다려..</h1>                
                }
            </div>
        )
    }    
}