// import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './componentes/NavBar/NavBar';
// import { CustomButton } from './componentes/CustomButton/CustomButton';
import { ItemCount } from './componentes/ItemCount/ItemCount'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const greeting = "Bienvenido al proyecto Frankestein, esta en proceso de creación";
  
  const categoriasMenu = [{id:1, link:"Inicio", route:"/categorias/Inicio"},{id:2,link:"Productos", route:"/categorias/productos",},{id:3, link:"Contacto", route:"/categorias/contacto"}, {id:4, link:"Quienes somos", route:"/categorias/quienesSomos"}];

  const onAdd = (contador) => {
    console.log(`Agregaste ${contador} productos`)
  };
    
  return (

    <BrowserRouter>
    <div className="App">
      <NavBar categoriasMenu={categoriasMenu}/>
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

        {/* <div>
          <CustomButton title="VER DETALLE"/>
        </div> */}

        <p>
          Keep moving forward!
        </p>
        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
