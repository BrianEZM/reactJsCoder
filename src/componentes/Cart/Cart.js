import React, {useContext, useEffect, useState} from "react";
import { contexto } from "../../CartContext/CartContext";
import './cart.css';
import { AiFillDelete } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import { db } from '../../firebase/firebase';
import {addDoc, collection, serverTimestamp, updateDoc, doc, increment} from "firebase/firestore";
import FormVenta from "../formVenta/formVenta";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cart = () => {

    const {cart, deleteProd, clear, total} = useContext(contexto);
    const sellCollection = collection(db, "ventas");
    const [idSell, setIdSell] = useState("");
    const [emptyCart, setEmptyCart] = useState(false);
    const [notProducts, setNotProducts] = useState(true);
    const [finish, setFinish] = useState(false);

    useEffect(()=>{
        if(cart.length > 0){
            setEmptyCart(true);
            setNotProducts(false);
        }
    },[cart]);
    
    const handlerFinalize = () =>{
        setFinish(true);
        setEmptyCart(false);
        setNotProducts(false);
    }
    
    const finishBuy = (comprador) => {
        addDoc(sellCollection, {
            comprador,
            products: cart,
            date: serverTimestamp(),
            total: total
        })
        .then((res)=>{
            setIdSell(res.id);
        })
        .catch(()=>{
            console.log('error');
        })
        cart.forEach((product)=>{
            const orderDoc = doc(db, "productos", product.id);
            updateDoc(orderDoc, {stock: increment(-product.quantity)});
        })
        notify();
        clear();
    }
    
    const deleteElement = (id) =>{
        deleteProd(id);
    }

    const clearCart = () => {
        clear();
        setEmptyCart(false);
        setNotProducts(true);
    }

    const notify = () => toast.success('ID venta: ' + idSell, 
    {   position: "top-right",
        autoClose: 2500,
        progress: undefined,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
        closeOnClick: true,
    });
    
    const cartProduct = cart.map((product)=>{
        return(
            <div className="prodContainer" key={product.id}>
                <img src={product.imag} alt='foto-producto' className='img-carrito' />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
                <button onClick={(()=>deleteElement(product.id))}>
                    <AiFillDelete />
                </button>
            </div>
        )
    })
    
    return(
        <div>                 
            {emptyCart && 
                <>
                    <div>
                        {cartProduct}
                    </div>
                    <p>Total: ${total}</p>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                    <button onClick={handlerFinalize}>Finalizar Compra</button>
                    <NavLink to={'/'}>
                        <button>Volver al inicio</button>
                    </NavLink>
                </> 
            }
            {notProducts &&
                <>
                    <h1>No hay productos en el carrito</h1>
                    <NavLink to={'/'}>
                        <button>Volver al inicio</button>
                    </NavLink>
                </>
            }
            {finish && 
                <>    
                    <FormVenta finishBuy={finishBuy}/>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={2500}
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <NavLink to={'/'}>
                        <button className='btnCarrito volverForm'>Volver al inicio</button>
                    </NavLink>
                </> 
            }                
        </div>
    )
};