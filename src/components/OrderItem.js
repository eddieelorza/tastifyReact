import React, {useContext} from 'react';
import AppContext from '../context/AppContext'; 
import '../styles/OrderItem.scss';

function OrderItem ({product}){
	const { removeFromCart} = useContext(AppContext);

	const handleRemove =() =>{
		removeFromCart(product)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.image} alt={product.name}                     />
			</figure>
			<p>{product.name}</p>
			<p>{product.price}</p>
			<img src="./icons/icon_close.png" alt="close" onClick ={()=>handleRemove(product)} />
		</div>
	);
}

export default OrderItem;