import React, {Component} from 'react'
import PrintName from './PrintName';
import PrintArr from './PrintArr';
import PrintSum from './PrintSum';

export default class Ex1 extends Component {

    constructor({arr}){
        super()
        this.state = {
            arr:arr
        }
    }

    checkProduct = ({pcode}) => {

        const target = this.state.arr.filter((obj) =>  obj.pcode === pcode)[0]
        const idx = this.state.arr.indexOf(target)
        this.state.arr[idx].selected =  !this.state.arr[idx].selected
        this.setState( {arr: this.state.arr})

    }
    

    render() {

        const {arr} = this.state 

        return(
            <div>
                <PrintArr arr={arr} fn={this.checkProduct}></PrintArr>
                <PrintSum arr={arr}></PrintSum>
                <PrintName name={"Hong Gil Dong"}></PrintName>
            </div>
        )
    }
}