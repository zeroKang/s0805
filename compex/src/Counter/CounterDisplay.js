import React,{Component} from 'react'


class CounterDisplay extends Component{

    constructor(props){
        super()
        console.log(props)
        this.state = {text:props.count}
    }

    changeText = (event)=> {
        console.log(event.target)
        const value = event.target.value
        this.setState({text:value})        
    }

    render() {
        return(
            <h1>현재 값:<input type='text' value={this.state.text} onChange={this.changeText}></input></h1>
        )
    }

}

export default CounterDisplay