import { FaOpencart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, {useState,useContext, useEffect} from 'react';
import { contexto } from "../../CartContext/CartContext";

export const CartWidget = () => {

    const {counter} = useContext(contexto);
    const [emptyCart, setEmptyCart] = useState(false);

    useEffect(()=>{
        if(counter === 0){
            setEmptyCart(false)
        } else if(counter > 0){
            setEmptyCart(true)
        }
    }, [counter]);

    return (
        <Link to='/cart'> 
            <FaOpencart/>
            {emptyCart && <p>{counter}</p>}
        </Link>
    );
};