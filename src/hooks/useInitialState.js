import { useState } from "react";

const initialState = {
    cart: [],
    openOrder: false,
    openMenu: false,
    openMobileMenu: false,
}

function useInitialState (){
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload]
		});
	};

	const removeFromCart = (payload) =>{
		setState({
			...state,
			cart:state.cart.filter(item => item.id !== payload.id),
		})
	}
	const toggleOrder = () =>{
		setState({
			...state,
			openOrder: !state.openOrder
		})
	}
	const toggleMenu = () =>{
		setState({
			...state,
			openMenu: !state.openMenu
		})
	}
	const toggleMobileMenu = () =>{
		setState({
			...state,
			openMobileMenu: !state.openMobileMenu
		})
	}



	return {
		state,
		addToCart,
		removeFromCart,
		toggleOrder,
		toggleMenu,
		toggleOrder,
		toggleMobileMenu

	}
}

export default useInitialState;