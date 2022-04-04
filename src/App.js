// import logo from './logo.svg';
import './App.css';
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer';
import {NavBar} from './componentes/NavBar/NavBar';
import {ItemCount} from './componentes/ItemCount/ItemCount'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer' 


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

        <section> 
          <ItemDetailContainer />
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
