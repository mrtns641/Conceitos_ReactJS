import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  const nome = "Leo"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Mateus"/>
      <SayMyName nome="Maria"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
