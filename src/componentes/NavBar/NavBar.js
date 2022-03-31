import { CartWidget } from "../ItemListContainer/CartWidget";

export const NavBar = () => {

    return (
        <>
        <nav className="navbar1">
          <a className='marca1'>Marca RANDOM</a>
          <a href='#'>Inicio</a>
          <a href='#'>Productos</a>
          <a href='#'>Quienes somos</a>
          <a href='#'>Contacto</a>
          <a href='#'>Perfil</a>
          <CartWidget />
          
        </nav>
        </>
    );
};
