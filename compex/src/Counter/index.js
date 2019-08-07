import React, {Component, Fragment} from 'react'
import CounterButton from './CounterButton';


export default class Counter extends Component {

    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <Fragment>
                <h1>{this.state.count}</h1>
                <CounterButton></CounterButton>
            </Fragment>
        )
    }
}