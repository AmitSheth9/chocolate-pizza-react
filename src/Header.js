import React, { Component } from 'react'
import ButtonList from './ButtonList'

export default class Header extends Component {
    render() {
        return (
        <header>
           <div className="delicious">
           <img src="logo.png" alt='' align="left"/>
            <div className="logo">
                Delicious
            </div>
            <div className='best-food'>
                The best food blog on the web
            </div> 
        </div>
        <ButtonList/>
          
        
    </header>
        )
    }
}
