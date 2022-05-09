import { ItemCount } from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";


export const ItemDetail = ({product}) => {

  const [finalized, setFinalized] = useState(false);
  // const {addProduct} = useContext(contexto);
  
  const onAdd = (count) => {
    // addProduct(product,count);
    console.log(`Agregaste ${count} productos`);
    setFinalized(true);

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
              {!finalized ? (
                <ItemCount onAdd={onAdd} stock={product.stock} initial={1} />
                ) : (
                <Link to="/cart">
                  <button>Finalizar compra</button>
                </Link>
                )}
            </div>
        </>
        )
      };
