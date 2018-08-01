import React,{Component} from "react";
import Input from "./Input";
import Title from "./Title";
import List from "./List";
export default class App extends Component {
    render() {
        let {add,del} = this.props
        let {title,list} = this.props.reducer1;
        return (
            <div>
                <Title title={title}/>
                <List list={list} del={del}/>
                <Input add={add}/>
            </div>
        )
    }
}
