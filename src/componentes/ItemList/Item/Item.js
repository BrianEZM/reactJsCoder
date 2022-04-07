

export const Item = ({key,title,stock,price,imag}) => {
        
    
    return (

        <div>
            <h1>Promo: {title}</h1>
            <h2>Cantidad: {stock}</h2>
            <p>Precio: {price}</p>
            <img src={imag} alt="imgDetalle"/>
        </div>

    )
}


// <img></img>
// <h1>{title}</h1>
// <p>{price}</p>
// <p>{stock}</p>