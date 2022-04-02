import {Item} from './Item/Item';



export const ItemList = ({productos}) => {

 
    return (
        <>
            {productos.map((producto) => {
                return <Item 
                key={producto.id} 
                title={producto.title} 
                stock={producto.stock}
                price={producto.price}
                imag={producto.imag}
                />
            })}
        </>
    );

};



