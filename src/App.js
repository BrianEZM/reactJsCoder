import logo from './logo.svg';
import './App.css';
import {ItemListContainer} from './componentes/desafio2cartWidgetILC/ItemListContainer.js';
import {NavBar} from './componentes/desafio1navBar/NavBar';
import {ItemCount} from './componentes/desafio3onAdd/ItemCountUseState'


function App() {

  const greeting = "Bienvenido al proyecto Frankestein, esta en proceso de creación";
  
  const onAdd = (contador) => {
    console.log(`Agregaste ${contador} productos`)
  };
    
  return (
    <div className="App">

      <NavBar />

      <header className="App-header">
        
        <section> 
          <ItemListContainer name={greeting}/>
        </section>

        <div>
          <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>

        <p>
          Keep moving forward!
        </p>
        
      </header>
    </div>
  );
}

export default App;
