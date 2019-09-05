import React from 'react';

export default class Block extends React.Component{
    render(){
        return(
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <div className="main one">{this.props.price}</div>
                <div className="main one">{this.props.numb}</div>             
            </div>

        )
    }
}