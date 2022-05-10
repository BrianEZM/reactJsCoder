import { createContext, useState } from 'react';


export const contexto = createContext();  
const { Provider} = contexto;

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);
    const [total, setTotal] = useState(0);

    const addProd = (prod, quantity)=>{
        const newProd = {
            ...prod,
            quantity
        };
        if(isInCart(prod.id)){
            const prodFind = cart.find(prod => prod.id === newProd.id);
            const index = cart.indexOf(prodFind);
            const aux = [...cart];
            aux[index].quantity += quantity;
            setCart(aux);
        }else{
            setCart([...cart, newProd]);
            getTotalCart(Number(prod.price), prod.quantity);
        }
    };
    const deleteProd = (id) => {
        const listFiltrada = cart.filter((a) => a.id !== id);
        setCart(listFiltrada);
    };
    const isInCart = (id) => {
        const prodExistente = cart.find(prod => prod.id === id);
        if(prodExistente){
            return true;
        } else {
            return false;
        }
    };

    const getTotalCart = (price, qty) => {
        price = price * qty;
        setTotal(total + price);
    }
    
    const getCantidadProds = () => {
            cart.forEach((prod) => {
                setCounter(counter + prod.quantity);
            });        
            return counter;
    };

    const clear = () => {
        setCart([]);
        setCounter(0);
        setTotal(0);
    };

    return(
        <Provider value={{cart, isInCart, addProd, deleteProd, getCantidadProds, counter, clear, total, getTotalCart}}>
            {children}
        </Provider>
    )
}

export default CustomProvider;