import { useState } from "react";

// Los HOOKS se usan siempre dentro del componenete! y al principio del mismo

export const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);
    // const [restador, setRestador] = useState(0);
    // const [reset, setReset] = useState(0);

    const handlerClickSuma = () => {

        if (contador >= initial && contador < stock){
            setContador(contador + 1)}
        //     else if (contador == 10){
        //     setContador(10)
        // }
        // ejemplo de copia de array con useState:
        // const [usuarios, setUsuarios] = useState([]);
        // setUsuarios([...usuarios, (nombre: "pepi")]);
        // SE RENDERIZA CON MAP
    };

    const handlerClickResta = () => {

        if (contador > initial)
        setContador(contador - 1)
    };

    const handlerClickReset = () => {

        setContador(initial)
    };

    const handlerOnAdd = () => {

        onAdd(contador);
    };

    return(
        <>
            <h1>{contador}</h1>
            <button onClick={handlerClickSuma}>Click Here to SUMAR</button>
            {/* <h2>{restador}</h2> */}
            <button onClick={handlerClickResta}>Click Here to RESTAR</button>
            {/* <h3>{reset}</h3> */}
            <button onClick={handlerClickReset}>Click Here to REINICIAR</button>
            <button onClick={handlerOnAdd}>Click Here to ONADD</button>
        </>

    );
};