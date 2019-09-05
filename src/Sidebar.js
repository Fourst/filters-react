import React from 'react';
import Block from './Block';

export default class Sidebar extends React.Component{

    state = {
        arr:[
            {id:1,title:"one", checked:true},
            
        ],
        price:[
            {id:1,price:13000,numb:"one",checked:false},
            {id:2,price:15000,numb:"two",checked:true},
        ]
    }
    // isCheck = () => {
    //     this.state.price.filter((item,key) =>{
    //         this.state.arr.filter((filt,key) => {
    //             if(item.checked === filt.checked){
    //                 return <Block key={key} price="13000" numb="ONE"/>
    //             }
    //         });
            
    //     })
    // }

    render(){
        return(
            <div>
                {/* {this.isCheck()} */}
            </div>
        )
    }
}