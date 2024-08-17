import React from 'react';
import Navbar from './components/Navbar';
import ChampionSelector from './components/ChampionSelector';
import ComboArea from './components/ComboArea';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChampionSelector />
      <ComboArea />
    </div>
  );
}

export default App;
