import React from 'react';
import Contact from './Contact';
import axios from "axios";

export default class App extends React.Component { 
    state = {
        search: "",
        contacts:[],
        // contacts:[
        //     {id:1,title:"all", chssecked:true},
        //     {id:2,title:"one", checked:false},
        //     {id:4,title:"one", checked:false},
        //     {id:3,title:"two", checked:false},
        // ],
    }
    componentDidMount(){
        // const URL = "https://api.manana.life/v1/city.getList";
        // fetch(URL)
        //     .then((response)=>{
        //         let r = response.json();
        //         console.log(r)
        //     })
        //     .catch(()=>{
                   
        //     })
        axios.get('https://api.manana.life/v1/city.getList')
        .then( (response) => {
            console.log(response.data.response);
            response.data.response.map(item => {
                this.setState(prevState => {
                    return {contacts:[...prevState.contacts, {id:`${item.id}`,title:`${item.name}`}]}
                })
            })
            })
     
          .catch(function (error) {
            console.log(error);
          })
    }
    updateSearch(e){
        this.setState({
            search: e.target.value.substr(0,20)
        })
    }
    render(){
        console.log(this.state.contacts);
        let filteredCont = this.state.contacts.filter(
            (contact) => {
                return contact.title.indexOf(this.state.search) !== -1;
                // return contact.title == this.state.search; //Написание полного текста 
            }
        );
        return(
            <div> 
                <div>
                {   
                   
                    filteredCont.map((contact) => {
                        return <Contact cont={contact.title} key={contact.id}/>
                    })
                }
                </div>
                <ul>
                </ul>
                <input type="text" value={this.state.search} onChange={(e) => this.updateSearch(e)}/>
            </div>
        )
    }
}