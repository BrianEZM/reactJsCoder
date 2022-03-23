import logo from './logo.svg';
import './App.css';
import {Desafios} from './componentes/desafio2cartWidgetILC/ItemListContainer.js';
import {NavBar} from './componentes/desafio1navBar/NavBar'


function App() {

  const greeting = "Bienvenido al proyecto Frankestein, esta en proceso de creación";

  return (
    <div className="App">

      <NavBar />

      <header className="App-header">
        
        <section> 
          <Desafios name={greeting}/>
        </section>

        <p>
          Keep moving forward!
        </p>
        
      </header>
    </div>
  );
}

export default App;
