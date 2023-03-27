import './App.css';
import { Header } from './components/Header';
import { AddPlayerForm } from './components/AddPlayerForm/AddPlayerForm';
import { PlayerList } from './components/PlayerList/PlayerList';

function App() {

  return (
    <div className="App">
      <Header />
      <PlayerList />
      <AddPlayerForm />
    </div>
  );
}

export default App;
