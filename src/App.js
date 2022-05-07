import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './componentes/NavBar/NavBar';
// import { CustomButton } from './componentes/CustomButton/CustomButton';
import { ItemCount } from './componentes/ItemCount/ItemCount'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomProvider from "./context/context"


const App = () => {

  const greeting = "Bienvenido al proyecto Frankestein, esta en proceso de creación";
  
    
  return (

    <BrowserRouter>
    <CustomProvider>
      <div className="App">
        <NavBar />

        <Routes>
        
            <Route path="/" element={<ItemListContainer greeting={greeting}/>} />
            <Route path="/categorias/:name" element={<ItemListContainer greeting={greeting}/>}/>
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
