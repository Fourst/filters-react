import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import Search from './Search';
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default class App extends React.Component { 

  render(){
    return (

      <div className="App">
        <div>Поиск</div>
        <Search/>
        <div>Фильтр чекбокс</div>
        <Sidebar/>
        <Main/>
      </div>
    )    
  }

}

