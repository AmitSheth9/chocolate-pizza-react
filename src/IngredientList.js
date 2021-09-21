import React, { Component } from 'react'
import Ul from './Ul'
import Ultwo from './Ultwo'


export default class IngredientList extends Component {
    render() {
        return (
            <div className="list">
            <div className='listone'>
                <Ul />
            </div>
            <div className='listtwo'>
                <Ultwo/>
            </div>
        </div>
        )
    }
}
