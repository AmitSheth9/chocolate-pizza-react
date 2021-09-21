import React, { Component } from 'react'
import { listData, listDataTwo } from './Data.js'

export default class Ul extends Component {
    render() {
        return (
            <ul>
                {listData.map((list) => <li key={listData.indexOf(list)}  >
                   {list.amount} {list.part}
                </li>)}

            </ul>
        )
    }
}
