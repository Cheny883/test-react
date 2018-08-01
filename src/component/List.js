import React,{Component} from 'react';
export default class List extends Component{
    render(){
        let {del,list} = this.props
        return(
            <ul>
                {list.map((val,key)=>(
                    <li>
                        {val}
                        <button onClick={()=>{del(key)}} class="del">Del</button>
                    </li>
                ))}
            </ul>
        )
    }
}
