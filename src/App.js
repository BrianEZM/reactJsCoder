import logo from './logo.svg';
import './App.css';
import {Desafios} from './componentes/desafio2cartWidgetILC/ItemListContainer.js';
import {NavBar} from './componentes/desafio1navBar/NavBar';
import {Botonete, UsandoHookUseState} from './componentes/desafio3onAdd/UsandoHookUseState'


function App() {

  const greeting = "Bienvenido al proyecto Frankestein, esta en proceso de creación";

  return (
    <div className="App">

      <NavBar />

      <header className="App-header">
        
        <section> 
          <Desafios name={greeting}/>
        </section>

        <div>
          <Botonete />
        </div>

        <p>
          Keep moving forward!
        </p>
        
      </header>
    </div>
  );
}

export default App;
