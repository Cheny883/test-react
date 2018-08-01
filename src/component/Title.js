import React,{Component} from 'react';
export default class Title extends Component{
    render(){
        var {title} = this,props
        return(
            <h1 id={"cyb"}>
                {this.props.title}
            </h1>
        )
    }
}
