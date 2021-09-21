import React, { Component } from 'react'
import ImageSection from './ImageSection.js'
import IngredientList from './IngredientList.js'
import Recipe from './Recipe.js'

export default class Main extends Component {
    render() {
        return (
            <main>
        <hr></hr>
        <div className='bodyheadcontainer'>
            <div className='leftheadercontainer'>
                <p className='bodyheader'>
                    Chocolate Pizza
                </p>
                <p className='postedon'>Posted on 25 AUG 1908 / DESSERTS
                </p>
            </div>
            <div className='print-logo'>
                <div className='print-logo-plus'>
                <img src="print-icon.png"alt=''/>
                PRINT
                </div>
            </div>
            
           
        </div>
        <ImageSection/>
        <Recipe/>
        <IngredientList/>
        <hr></hr>
    <section className="vanessa">
        <img src="van-pic.png"alt='' />
        <div>
        <div>
           Vanessa Stevenson
       </div>
       <div className='enthusiast'>
           Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
       </div>
        </div>
       <button>SHARE RECIPE</button>
    </section>
    </main>
        )
    }
}
