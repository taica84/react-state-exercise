import React, { Component } from 'react';
import './box-style.css';
import {choice} from './helper';

export default class Box extends Component {
    static defaultProps = {
        allColors: [
            'chartreuse','crimson', 
            'red' , 'orange' , 'black' , 'green',
            'darkgrey' , 'purple'
        ]
    }
    constructor(props) {
        super(props);
          this.state = { color:choice(this.props.allColors)};
    };

    handleClick = () => {
          let randColor =choice(this.props.allColors);
          this.setState({color:randColor});
     
    }
    render() {
        return (
            <div>
               
                <div className='Box'
                    style={{backgroundColor:this.state.color}}
                    onClick = {this.handleClick}
                    >
                
              </div>
            </div>
        )
    }
}
