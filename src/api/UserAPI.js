import { useState, useEffect } from 'react';
import axios from 'axios';

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [detail,setDetail] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get('https://petshop-bn3rzeehqq-uc.a.run.app/user/infor', {
            headers: { Authorization: token },
          });
          setDetail(res.data)
          //console.log(res.data)
          setIsLogged(true);
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);

          setCart(res.data.cart)
        } catch (err) {
          alert(err.response.data.msg);
        }
      };

      getUser();
    }
  }, [token]);

  const addCart = async (product,type) => {
    if (!isLogged) return alert('Please login to continue buying');
    var newProduct = Object.assign({}, product);
    newProduct.types = [type]
    const check = cart.every((item) => {
      return item._id !== product._id;
    });
    //console.log("cart"+ newProduct.type);
    if (check) {
      setCart([...cart, { ...newProduct,quantity: 1 }]);

      await axios.patch(
        'https://petshop-bn3rzeehqq-uc.a.run.app/user/addcart',
        { cart: [...cart, { ...newProduct, quantity: 1 }] },
        {
          headers: { Authorization: token },
        }
      );
    } else {
      alert('This product has been added to cart.');
    }
  };

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    addCart: addCart,
    history: [history, setHistory],
    detail:[detail,setDetail], 
  };
}

export default UserAPI;
