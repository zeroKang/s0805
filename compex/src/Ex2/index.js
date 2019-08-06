import React, {Component, Fragment} from 'react'
import PageMaker from './PageMaker'
import PageList from './PageList'
import axios from "axios"




export default class Ex2 extends Component {

    constructor(){
        super()
        this.state = {
            arr:[],
            total: 127,
            pageNum: 1
        }       
    }

    componentDidMount(){
        this.getData(this.state.pageNum)
    }

    async getData(pageNum) {
        let result = await axios.get("http://localhost:8080/todo/pages/" + pageNum);
        console.log(result)
        this.setState(Object.assign(this.state.arr, {arr:result.data, pageNum:pageNum}))

        console.log(this.state)
    }

    movePage = ({pageNum}) => {
        console.log(pageNum)
        alert("move to page " + pageNum)
        this.getData(pageNum)
    }

    render(){
        return (
            <Fragment>
                <PageList arr = {this.state.arr}></PageList>
                <PageMaker total={this.state.total} pageNum ={this.state.pageNum} fn = {this.movePage}></PageMaker>
            </Fragment>
        )    
    }
}


