import React, {useContext} from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
// import addCart from '@icons/bt_add_to_cart.svg'
// import addedCart from '@icons/bt_added_to_cart.svg'

function ProductItem({product}){
	const { state, addToCart } = useContext(AppContext);

	const handleClick = item => {


		addToCart(item);
	}


	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.name} />
			<div className="product-info">
				<div>
					<p>{product.name}</p>
					
					<p>${product.price}</p>

					
				</div>
				<section onClick={() => handleClick(product)}>
				{  state.cart.includes(product)  ?
					<div className="add--box" >
									<a  className="disabled">Agregado</a>
				    </div> :
						<div className="add--box" >
						<a  className="">Agregar al Carrito</a>
		        </div> 
                }
				</section>

				{/* <figure onClick={() => handleClick(product)} >
				{  state.cart.includes(product)  ? <img className=" add-to-cart-btn" src={addedCart} alt="added to cart" />  : <img className="add-to-cart-btn pointer" src={addCart} alt="add to cart" /> }
				</figure> */}
			</div>
		</div>
	);
}

export default ProductItem;