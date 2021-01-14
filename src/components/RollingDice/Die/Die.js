import React, { Component } from 'react';
import './die-style.css';

export default class Die extends Component {
    render() {
        return (
            <div>
                
                <i className={`Die fas fa-dice-${this.props.face} ${ this.props.spiner ? 'spinning' : ""} `}/>
            </div>
        )
    }
}
