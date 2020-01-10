import React, {Component} from 'react'
import ChildItem from './childDemo1'
class Demo extends Component{
    constructor(props) {
        super(props)
        this.state={
            inputValue: '',
            list: ['测试1', '测试2', '测试4']
        }
    }
    // inputChange (e) {
    //     console.log(e.target.value)
    //     // this.state.inputValue = e.target.value
    //     this.setState({
    //         inputValue: e.target.value
    //     })
    // }
    inputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    addServer = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    deleteItem = (index) => {
        let list1 = this.state.list
        list1.splice(index, 1)
        this.setState({
            // list: this.state.list.filter((item, i) => {
            //     return i !== index
            // })
            list: list1
        })
    }
    render () {
        return (
            <div>
                {/* 第一次注释 */}
               <div>
                   {/* <label htmlFor></label> */}
                   <input
                    value={this.state.inputValue}
                    onChange={this.inputChange} />
                    <button onClick={this.addServer}> 增加服务 </button>
                </div>
               <ul>
                    {/* {
                       this.state.list.map((item, index) => {
                           return (
                                <li key={item}>
                                    {/* dangerouslySetInnerHTML
                                    {item} <span onClick={() => this.deleteItem(index)} style={{color: 'red'}}>删除</span>
                                </li>
                            )
                       })
                    } */}
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <ChildItem
                                    key={index + item}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem}/>
                            )
                        })
                    }
               </ul> 
            </div>
        )
    }
}

export default Demo