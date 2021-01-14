import React, { Component } from 'react';
import Die from '../Die/Die';
import './rolling-dice-style.css';

export default class RolllingDice extends Component {
    static defaultProps = {
        sides : ['one' , 'two' , 'three' , 'four' , 'five' , 'six']
    }
    constructor(props) {
        super(props);
        this.state = {
            dice1 : 'one',
            dice2 : 'five',
            rolling:false
        }
        this.roll = this.roll.bind(this);
    };
     
     roll()  {
          const newDice1 = this.props.sides[ 
              Math.floor(Math.random() * this.props.sides.length)
          ];
          const newDice2 = this.props.sides[ 
            Math.floor(Math.random() * this.props.sides.length)
        ];
        this.setState({dice1:newDice1 , dice2:newDice2 , rolling:true});
        //set timeout 
        setTimeout( () => {
            this.setState({rolling:false})
        },1000 )
      }

    render() {
        return (
            <div className='RollDice' >
                <h2>Exercise 4</h2>
              <div className='RollDice-container' >
                <Die face={this.state.dice1} spiner={this.state.rolling} />
                <Die face={this.state.dice2} spiner={this.state.rolling} />
              </div>

               
                <button onClick={this.roll} disabled={this.state.rolling} >
                    {this.state.rolling ? 'Rollling...' : 'Roll Dice' }
                </button>
            </div>
        )
    }
}
