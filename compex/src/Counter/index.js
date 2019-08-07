import React, {Component, Fragment} from 'react'
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';


export default class Counter extends Component {

    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    increase = (amount) => {
        //alert("increase")
        this.setState(
            {count: this.state.count + amount}
        )
    }

    render(){
        return(
            <Fragment>
                <CounterDisplay count ={this.state.count}></CounterDisplay>
                <CounterButton fn={this.increase} amount={1} text={"ADD"}></CounterButton>
                <CounterButton fn={this.increase} amount={-1} text={"MINUS"}></CounterButton>
            </Fragment>
        )
    }
}