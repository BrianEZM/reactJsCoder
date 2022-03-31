

export const Item = (props) => {
        
    
    return (

        <div>
            <h1>Promo: {props.title}</h1>
            <h2>Cantidad: {props.stock}</h2>
            <p>Precio: {props.price}</p>
            {/* <img src={props.picture}>Descripcion: </img> */}
        </div>

    )
}


// <img></img>
// <h1>{title}</h1>
// <p>{price}</p>
// <p>{stock}</p>