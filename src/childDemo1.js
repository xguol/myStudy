import React, { Component } from 'react';
class ChildItem extends Component {
    constructor(props){
        super(props)
        // let {content, index} = props
    }
    deleteItem (index) {
        console.log(index)
        this.props.deleteItem(index)
    }
    render() { 
        return (
            <li>{this.props.content}<span onClick={() => this.deleteItem(this.props.index)} style={{color: 'red'}}>删除</span></li>
        )
    }
}
 
export default ChildItem;