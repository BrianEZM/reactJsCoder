import { useState } from "react";

export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handlerAdd = () => {
        if (count >= initial && count < stock){
            setCount(count + 1)}
            else{
                alert('No hay mas stock');
            }
    };

    const handlerSubtract = () => {
        if (count > initial)
        setCount(count - 1)
    };

    const handlerAddToCart = () => {
        onAdd(count);
    };

    return(
        <>
            <div className="contenedor1">
                <div className="contenedor2">
                    <button className="contador" onClick={handlerSubtract}>Restar</button>
                    <h3>{count}</h3>
                    <button className="contador" onClick={handlerAdd}>Sumar</button>
                </div>
                <button className="contador" onClick={()=>handlerAddToCart(count)} count={count}>Enviar al Carrito</button>
            </div>
        </>

    );
};