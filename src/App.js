import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { NavB } from './componentes/NavBar/NavBar';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomProvider from "./CartContext/CartContext"


const App = () => {

  const greeting = "Bienvenido a nuestro sitio web, gracias por tu visita";
    
  return (

    <BrowserRouter>
    <CustomProvider>
      <div className="App">
        <NavB />

        <Routes>
        
            <Route path="/" element={<ItemListContainer greeting={greeting}/>} />
            <Route path="/category/:name" element={<ItemListContainer greeting={greeting}/>}/>
            <Route path="/id/:id" element={ <ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            {/* <Route path="*" element={<Error404 />}/> */}

        </Routes>

          <p>
            Keep moving forward!
          </p>

      </div>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
