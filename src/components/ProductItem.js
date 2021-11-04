import React, {useContext} from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addCart from '@icons/bt_add_to_cart.svg'

function ProductItem({product}){
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src='https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt={product.name} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>pizza</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={addCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;