import { ItemCount } from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";


export const ItemDetail = ({product}) => {
  
  const onAdd = (contador) => {
    console.log(`Agregaste ${contador} productos`)
  };

    return (
        <>
            <div>
                <h1>Promo DETALLADA: {product.name}</h1>
                <h2>Cantidad DETALLADA: {product.stock}</h2>
                <p>Precio DETALLADO: {product.price}</p>
                <img src={product.imag} alt="imagenMuestra"/>
                <h4>Caracteristicas DETALLADA: {product.details}</h4>
            </div>

            <div>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
        </>
        )
    };
