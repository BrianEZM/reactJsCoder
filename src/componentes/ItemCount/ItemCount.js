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

    // const handlerReset = () => {
    //     setCount(initial)
    // };

    const handlerAddToCart = () => {
        onAdd(count);
    };

    return(
        <>
            <h1>{count}</h1>
            <button onClick={handlerAdd}>Agregar producto</button>
            <button onClick={handlerSubtract}>Quitar producto</button>
            {/* <button onClick={handlerReset}>Click Here to REINICIAR</button> */}
            <button onClick={()=>handlerAddToCart(count)} count={count}>Agregar al Carrito de compras</button>
        </>

    );
};