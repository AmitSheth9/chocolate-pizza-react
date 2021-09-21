import React, { Component } from 'react'
import { listData } from './Data.js'
import { listDataTwo } from './Data.js'
import Ul from './Ul.js'
import Ultwo from './Ultwo.js'

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
        <img src="choco-pizza.png" alt='' />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque nam eaque, a laborum esse quo possimus soluta aliquid necessitatibus architecto et eveniet ducimus aliquam sed, quas maxime, aspernatur vel!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium voluptate ipsa harum omnis odit necessitatibus praesentium sapiente? Blanditiis corporis unde eligendi in vero exercitationem temporibus qui animi molestiae beatae!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, minus veritatis recusandae doloribus impedit quas ducimus maiores non earum quae, tempora quos delectus rem perferendis magnam vitae tenetur soluta est.
        </p>
        <div className="list">
            <div className='listone'>
                <Ul />
            </div>
            <div className='listtwo'>
                <Ultwo/>
            </div>
        </div>
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
