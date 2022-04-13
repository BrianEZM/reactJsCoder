import { CartWidget } from "../ItemListContainer/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import logo from "../../imgMarca/marcaTat.jpg";
import "./NavBar.css";

export const NavBar = () => {

  const categorias = [
    {id:1, name:"Tatuajes Grandes", route:"categorias/grandes",},
    {id:2, name:"Tatuajes Medianos", route:"categorias/medianos"},
    {id:3, name:"Tatuajes Pequeños", route:"categorias/pequeños"}
  ];

  return (
        <>
          <nav className="navbar1">
            <Link to="/">
              <img src={logo} alt="logotipo" />
            </Link>

            {categorias.map((element)=>{
            return <NavLink  key={element.id} to={element.route}>{element.name}</NavLink>
            })}

          {/* 
          <Link to='#'>{props.links[0]}</Link>
          <Link to='#'>{props.links[1]}</Link>
          <Link to='#'>{props.links[2]}</Link>
          <Link to='#'>{props.links[3]}</Link>
           */}
           <NavLink to="/cart"> 
                <CartWidget /> 
           </NavLink>
          </nav>
        </>
    );
};
