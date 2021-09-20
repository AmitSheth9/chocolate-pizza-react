import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <header>
           <div className="delicious">
            <img src="logo.png" align="left"/>
            <div className="logo">
                Delicious
            </div>
            <div className='best-food'>
                The best food blog on the web
            </div> 
        </div>
        <div className="icons">
            <img src="fb-icon.png" alt=''/>
            <img src="twit-icon.png"alt=''/>
            <img src="gp-icon.png"alt=''/>
            <img src="insta-icon.png"alt=''/>
            <img src="flic-icon.png"alt=''/>
            <img src="pint-icon.png"alt=''/>
            <img src="rss-icon.png"alt=''/>
            <img src="mail-icon.png"alt=''/>
        </div>
    </header>
        )
    }
}
