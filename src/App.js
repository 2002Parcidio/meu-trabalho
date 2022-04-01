import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
function App() {
  const name = 'Parcídio'
  const url = 'https://via.placeholder.com/500'
  return (
    <div className="App">
      <Pessoa nome='Indefinido' idade='15' profissão='Pedreiro'/>
      <Pessoa idade='15'/>
        <p>
          Hello {name}
        </p>
        <HelloWord/>
        <SayMyName nome='ParcídioThegreat'/>

    </div>
  );
}

export default App;
