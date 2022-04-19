

export const ItemDetail = ({producto}) => {


        return (
    
            <div>
                <h1>Promo DETALLADA: {producto.name}</h1>
                <h2>Cantidad DETALLADA: {producto.stock}</h2>
                <p>Precio DETALLADO: {producto.price}</p>
                <img src={producto.imag} alt="imagenMuestra"/>
                <h4>Caracteristicas DETALLADA: {producto.detalles}</h4>
            </div>
    
        )
    };
