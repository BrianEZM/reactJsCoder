import { CartWidget } from "../ItemListContainer/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import logo from "../../imgMarca/marcaTat.jpg";
import "./NavBar.css";

export const NavBar = ({categoriasMenu}) => {


  return (
        <>
          <nav className="navbar1">
            <Link to="#"><img src={logo} alt="" /></Link>
            {categoriasMenu.map((element)=>{
            return <NavLink  key={element.id} to={element.route}>{element.link}</NavLink>
            })}

          {/* 
          <Link to='#'>{props.links[0]}</Link>
          <Link to='#'>{props.links[1]}</Link>
          <Link to='#'>{props.links[2]}</Link>
          <Link to='#'>{props.links[3]}</Link>
           */}
           <NavLink to="/cart"><CartWidget /></NavLink>
          
          </nav>
        </>
    );
};
