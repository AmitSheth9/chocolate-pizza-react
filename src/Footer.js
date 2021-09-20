import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
    <footer>
        <hr className='bottom-line'/>
        <img src="small-logo.png" alt=''/>
       <div className="copyright">Delicious &copy; 2013 - All rights reserved <br/>
            Proudly published with Ghost.
        </div>
    </footer>
        )
    }
}
