import React from "react";

export default class Checked extends React.Component{
    
    render(){
        return(
            <div>
                <label>{this.props.ars.title}</label>
                <input type="checkbox" checked={this.props.ars.checked}/>
            </div>
        )
    }
}