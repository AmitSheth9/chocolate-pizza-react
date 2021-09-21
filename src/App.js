import React, { Component } from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import './App.css';


export default class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Main/> 
        <Footer/>
       </>
     
    );
  }
}

