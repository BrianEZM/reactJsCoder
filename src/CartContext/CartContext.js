import { NewReleases } from '@mui/icons-material';
import { createContext, useState } from 'react';

export const contexto = createContext();  
const { Provider} = contexto;

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);
    const [total, setTotal] = useState(0);

    const addProd = (prod, quantity)=>{
        const prodFind = cart.find(({id}) => id === prod.id);
        const newProd = isInCart(prod.id)
            ? {...prod, quantity: quantity + cart[cart.indexOf(prodFind)]?.quantity}
            : {...prod, quantity};
        const newCart = [newProd, ...cart.filter(({id}) => id !== prod.id)];
        setCart([...newCart]);
        setTotalPrice(Number(prod.price), newProd.quantity);
        setCounter((prevValue) => prevValue + quantity);
    };

    const deleteProd = (id) => {
        const listFiltrada = cart.filter((prod) => prod.id !== id);
        setCart(listFiltrada);
    };

    const isInCart = (id) => {
        const prodExistente = cart.find(prod => prod.id === id);
        return !!prodExistente;
    };

    const setTotalPrice = (price, quantity) => {
        const newPrice = price * quantity;
        setTotal((previousTotal) => previousTotal + newPrice);
    }
    
    const getCantidadProds = () => {
            cart.forEach((prod) => {
                setCounter((prevValue) => {
                    console.log({prod, prevValue})
                    return prevValue + prod.quantity
                });
                });
                return counter
            };

    const clear = () => {
        setCart([]);
        setCounter(0);
        setTotal(0);
    };

    return(
        <Provider value={{cart, isInCart, addProd, deleteProd, getCantidadProds, counter, clear, total, setTotalPrice}}>
            {children}
        </Provider>
    )
}

export default CustomProvider;