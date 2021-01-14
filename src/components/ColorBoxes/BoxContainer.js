import React, { Component } from 'react';
import Box from './Box';
import './box-container-style.css';

export default class BoxContainer extends Component {
    static defaultProps = {
        numBoxes:15
    }
    render() {
        const boxes = Array.from({length:this.props.numBoxes}).map(
            () => <Box/>
        )
        return (
            <div>
                <h2>Exercise 5</h2>
                <h3>Click on boxes to change color</h3>
             <div className='Box-container'>
                
                
                {boxes}
            </div>
            </div>
            
        )
    }
}
