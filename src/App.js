
import './App.css';

import Lottery from './components/Lottery/Lottery';
import FlipCoin from './components/FlipCoin/FlipCoin';
import Pokegame from './components/Pokemon/Pokegame/Pokegame';
import RollingDice from './components/RollingDice/RollingDice/RolllingDice';

function App() {
  return (
    <div className="App">
      <h1>State Exercise (React) </h1>
      <h2>Exercise 1</h2>
      <Lottery/>
      <Lottery title='Mini Daily' numBalls={4} maxNum={10} />
      <hr/>
      < FlipCoin/>
      <hr/>
      <Pokegame/>
      <hr/>
      <RollingDice/>

    </div>
  );
}

export default App;
