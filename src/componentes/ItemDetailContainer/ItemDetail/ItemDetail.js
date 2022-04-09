


export const ItemDetail = (props) => {


        return (
    
            <div>
                <h1>Promo DETALLADA: {props.title}</h1>
                <h2>Cantidad DETALLADA: {props.stock}</h2>
                <p>Precio DETALLADO: {props.price}</p>
                <img src={props.imag} alt="imagenMuestra"/>
                <h4>Caracteristicas DETALLADA: {props.detalles}</h4>
            </div>
    
        )
    };
