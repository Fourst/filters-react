import React from 'react';

export default class App extends React.Component { 
    state = {
        color:"#262626",
    }
    random(){
        let rand = Math.random(0,255)*1000;
        return rand;
    }
    render(){
        return(
            <div style={{
                padding: 15,
             
            }}>
                {this.props.cont}
            </div>
        )
    }
}