import { ItemCount } from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { contexto } from "../../../CartContext/CartContext"

export const ItemDetail = ({product}) => {

  const { addProd, setTotalPrice, isInCart } = useContext(contexto);
  const [finalized, setFinalized] = useState(false);
  
  const onAdd = (count) => {
        addProd(product, count);
        setFinalized(false);
        isInCart(product.id);
        setTotalPrice(product.price, count);

  };

    return (
        <>
            <div>
                <h1>Promo: {product.name}</h1>
                <h2>Cantidad: {product.stock}</h2>
                <p>Precio: {product.price}</p>
                <img src={product.imag} alt="imagenMuestra"/>
                <h5>Características: {product.Características}</h5>
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
        );
      };
