import React, { Component } from 'react'
import { listDataTwo } from './Data'

export default class Ultwo extends Component {
    render() {
        return (
            <ul>
                {listDataTwo.map((list) => <li key={listDataTwo.indexOf(list)}>
                    {list.amount} {list.part}
                </li>)}
            </ul>
        )
    }
}
