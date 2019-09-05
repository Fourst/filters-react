import React from 'react';
import Checked from "./Checked";
export default class Main extends React.Component{
    state={
        arr:[
            {id:1,title:"all", checked:true},
            {id:2,title:"one", checked:false},
            {id:3,title:"two", checked:false},
        ]
    }
    Filter = () => {
            const {arr} = this.state;
            return arr.map( (item,key) => <Checked key={key} ars={item}/>)
    }
    render(){
        return(
        <div>
            {this.Filter()}
        </div>
        )
    }
}