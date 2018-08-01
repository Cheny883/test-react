import React,{Component} from 'react';
export default class Input extends Component{
    render(){
        let {add} = this.props
        return(
            <div>
                <input ref={(c)=>{this.inp = c}}/>
                <button onClick={()=>{add(this.inp.value)}}>Add</button>
            </div>
        )
    }
}
