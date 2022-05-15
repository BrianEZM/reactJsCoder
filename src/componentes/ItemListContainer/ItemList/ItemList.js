import {Item} from './Item/Item';

export const ItemList = ({products}) => {

    return (
        <>
            {products.map((product) => {
                return <Item 
                key={product.id} 
                product={product}
                />
            })}
        </>
    );
};



