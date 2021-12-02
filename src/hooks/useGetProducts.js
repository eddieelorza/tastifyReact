import {useEffect,useState} from 'react';
import axios from 'axios'

function useGetProducts(API) {
        const [products, setProducts] = useState([])

	   useEffect(async()=>{
		const response = await axios(API)
		setProducts(response.data.data.rows);
       

	   },[] )


	   return products

} 

export default useGetProducts