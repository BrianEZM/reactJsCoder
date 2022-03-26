import { useState } from "react";

// Los HOOKS se usan siempre dentro del componenete! y al principio del mismo

export const Botonete = () => {

    const [contador, setContador] = useState(0);
    // const [restador, setRestador] = useState(0);
    // const [reset, setReset] = useState(0);

    const handlerClickSuma = () => {

        setContador(contador + 1)

        // ejemplo de copia de array con useState:
        // const [usuarios, setUsuarios] = useState([]);
        // setUsuarios([...usuarios, (nombre: "pepi")]);
        // SE RENDERIZA CON MAP

    };

    const handlerClickResta = () => {

        setContador(contador - 1)

    };

    const handlerClickReset = () => {

        setContador(0)

    };

    return(
        <>
            <h1>{contador}</h1>
            <button onClick={handlerClickSuma}>Click Here to SUMAR</button>
            {/* <h2>{restador}</h2> */}
            <button onClick={handlerClickResta}>Click Here to RESTAR</button>
            {/* <h3>{reset}</h3> */}
            <button onClick={handlerClickReset}>Click Here to REINICIAR</button>
        </>

    );
};