import { Link } from "react-router-dom"


export const Item = ({producto}) => {
    
    const url = `/id/${producto.id}`;
    console.log(url);
    
    return (

        <div>
            <h1>Promo: {producto.name}</h1>
            <h2>Cantidad: {producto.stock}</h2>
            <p>Precio: {producto.price}</p>
            <img src={producto.imag} alt="imgDetalle"/>
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