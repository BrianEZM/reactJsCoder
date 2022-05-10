import { Link } from "react-router-dom"



export const Item = ({product}) => {
    
    const url = `/id/${product.id}`;
    console.log(url);

    return (

        <div>
            <h1>Promo: {product.name}</h1>
            <h2>Cantidad: {product.stock}</h2>
            <p>Precio: {product.price}</p>
            <img src={product.imag} alt="imgDetalle"/>
           {/* <Link to={url}>  </Link> */}
            <Link to={url}>
                <button> Ver Detalles </button>
            </Link>
        </div> 
    );
};

   
// <img></img>
// <h1>{title}</h1>
// <p>{price}</p>
// <p>{stock}</p>