import { Link } from "react-router-dom"
import "./item.css"

export const Item = ({product}) => {
    
    const url = `/id/${product.id}`;

    return (

        <div className="prodContainer">
            <h1>Promo: {product.name}</h1>
            <h2>Cantidad: {product.stock}</h2>
            <p>Precio: {product.price}</p>
            <img src={product.imag} alt="imgDetalle"/>
            <Link to={url}>
                <button className="btnDetalle"> Ver Detalles </button>
            </Link>
        </div> 
    );
};
