import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import Axios from 'axios'



const MyFeedback = () => {
    const state = useContext(GlobalState);
    const [user,setUser] = state.userAPI.detail;
    const [products,setProducts] = state.productsAPI.products;
    console.log(user)
    console.log(products)
  return (
    <div>
      feedback
    </div>
  )
}

export default MyFeedback
