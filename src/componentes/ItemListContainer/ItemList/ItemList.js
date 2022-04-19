import {Item} from './Item/Item';



export const ItemList = ({productos}) => {

 
    return (
        <>
            {productos.map((producto) => {
                return <Item 
                key={producto.id} 
                producto={producto}
                />
            })}
        </>
    );

};


