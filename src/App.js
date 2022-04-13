// import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './componentes/NavBar/NavBar';
// import { CustomButton } from './componentes/CustomButton/CustomButton';
import { ItemCount } from './componentes/ItemCount/ItemCount'
// import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  const greeting = "Bienvenido al proyecto Frankestein, esta en proceso de creación";
  
  const onAdd = (contador) => {
    console.log(`Agregaste ${contador} productos`)
  };
    
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
        
            <Route path="/" element={<ItemListContainer greeting={greeting}/>} />
            <Route path="/categorias/:name" element={<ItemListContainer greeting={greeting}/>}/>
            {/* <Route path="/producto:id" element={ <ItemDetailContainer />}/> */}
            <Route path="/cart" element={<Cart />}/>
            {/* <Route path="*" element={<Error404 />}/> */}

        </Routes>

          <div>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
          </div>

          {/* <div>
            <CustomButton title="VER DETALLE"/>
          </div> */}

          <p>
            Keep moving forward!
          </p>

      </div>
    </BrowserRouter>
  );
}

export default App;
