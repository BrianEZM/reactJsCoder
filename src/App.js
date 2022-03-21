import logo from './logo.svg';
import './App.css';
import Desafios from './Desafios.js';

function App(props) {
  
  console.log(props.name);

  return (
    <div className="App">
      <nav className="navbar1">
          <a className='marca1'>Marca RANDOM</a>
          <a href='#'>Inicio</a>
          <a href='#'>Productos</a>
          <a href='#'>Quienes somos</a>
          <a href='#'>Contacto</a>
          <a href='#'>Perfil</a>
        </nav>
      <header className="App-header">
        
        <section className='card1'> 
      
        </section>
        <p>
          Keep moving forward!
        </p>
        
      </header>
    </div>
  );
}

export default App;
