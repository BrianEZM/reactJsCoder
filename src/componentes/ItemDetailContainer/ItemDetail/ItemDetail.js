import { ItemCount } from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { contexto } from "../../../CartContext/CartContext"

export const ItemDetail = ({product}) => {

  const { addProd, getTotalCart, isInCart, getCantidadProds } = useContext(contexto);
  const [finalized, setFinalized] = useState(false);
  
  const onAdd = (count) => {
        addProd(product, count);
        setFinalized(false);
        isInCart(product.id);
        getTotalCart(product.price, count);
        getCantidadProds();

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
