import { useState } from "react";

// Los HOOKS se usan siempre dentro del componenete! y al principio del mismo

export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handlerAdd = () => {
        if (count >= initial && count < stock){
            setCount(count + 1)}
    };

    const handlerSubtract = () => {
        if (count > initial)
        setCount(count - 1)
    };

    const handlerReset = () => {
        setCount(initial)
    };

    const handlerAddToCart = () => {
        onAdd(count);
    };

    return(
        <>
            <h1>{count}</h1>
            <button onClick={handlerAdd}>Click Here to SUMAR</button>
            <button onClick={handlerSubtract}>Click Here to RESTAR</button>
            <button onClick={handlerReset}>Click Here to REINICIAR</button>
            <button onClick={handlerAddToCart}>Click Here to ONADD</button>
        </>

    );
};