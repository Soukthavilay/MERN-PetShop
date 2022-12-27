import React, { useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import Loading from '../utils/loading/Loading';

const initialState = {
  // orderItems: [
  //   {
  //     product_id: '639303a2208a1200048b26e7',
  //     type_id: '639303a2208a1200048b26e7',
  //     amount: 1,
  //   },
  // ],
  address: '',
  phone: '',
  shippingCode: 'no',
};
const Checkout = () => {
  const state = useContext(GlobalState);
  console.log(state);
  const [order, setOrder] = useState(initialState);
  const [cart, setCart] = state.userAPI.cart;
  const [process, setProcess] = state.orderAPI.processed;
  const [loading, setLoading] = useState(false);
  console.log(process);
  console.log(cart);
  const history = useHistory();
  const [token] = state.token;
  //const [orderitem,setOrderItem] = useState();
  console.log(token);
  //const [orders, setOrders] = state.orderAPI.order;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };
  const addToCart = async (cart) => {
    setLoading(true);
    await axios.patch(
      '/user/addcart',
      { cart },
      {
        headers: { Authorization: token },
      }
    );
    setLoading(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const rs = [];
    for (const test of cart) {
      var obj = {
        product_id: test._id,
        type_id: test.types[0]._id,
        amount: test.quantity,
      };
      console.log(test);
      rs.push(obj);
      //setOrderItem(obj);
    }

    const re = {
      orderItems: rs,
      address: order.address,
      phone: order.phone,
      shippingCode: order.shippingCode,
    };
    console.log(re);
    const orders = await axios.post(
      '/api/orders',
      { ...re },
      {
        headers: { Authorization: token },
      }
    );
    setProcess(orders.data.order);
    //alert('Bạn đã đặt hàng thành công.');
    setCart([]);
    addToCart([]);
    history.push('/processed');
  };

  return (
    <div className="body-checkout">
      {/* <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
        Checkout order
      </h1>
      <div className="header-order">
        <h3>.</h3>
        <h3>Product name</h3>
        <h3>Amount</h3>
        <h3>Price</h3>
      </div>
      <div className="checkout-page">
        <div className="">
          {cart.map((product, type) => (
            <div className="orderItem" key={product._id}>
              <img src={product.images.url} alt="" />
              <h3>{product.title}</h3>
              <h3>{product.quantity}</h3>
              <h3>$ {product.types[0].price * product.quantity}</h3>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="order-info">
            <label>Address</label>
            <input
              type="text"
              id="address"
              required
              value={order.address}
              onChange={handleChangeInput}
              name="address"
              placeholder="example:!!  Robert Robertson,  1234 NW Bobcat Lane,  St. Robert "
            />
            <label>Phone Number</label>
            <input
              type="text"
              id="phone"
              required
              value={order.phone}
              onChange={handleChangeInput}
              name="phone"
              placeholder="+84 065584-5678."
            />
          </div>
          <button type="submit" className="btn_check">
            processed Order
          </button>
        </form>
      </div> */}
      <div className="row-billing">
        <div className="col-75">
          <div className="container-billing">
            <form onSubmit={handleSubmit}>
              <div className="row-billing">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label forhtml="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    value={order.address}
                    onChange={handleChangeInput}
                    name="address"
                    placeholder="example:!!  Robert Robertson,  1234 NW Bobcat Lane,  St. Robert "
                  />
                  <label forhtml="city">
                    <i className="fa fa-institution"></i> Phone number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    required
                    value={order.phone}
                    onChange={handleChangeInput}
                    name="phone"
                    placeholder="+84 065584-5678."
                  />
                </div>
                <div className="col-50">
                  <h3>Payment</h3>
                  <label forHtml="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i
                      className="fa fa-cc-paypal"
                      style={{ color: 'navy' }}
                    ></i>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-billing">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container-billing">
            <h5>
              Cart{' '}
              <span className="price" style={{ color: 'black' }}>
                <i className="fa fa-shopping-cart"></i> <b>{cart.length}</b>
              </span>
            </h5>
            {cart.map((product, type) => (
              <div key={product._id}>
                <a href="#">{product.title}</a>
                <p>x{product.quantity}</p>
                <img
                  style={{ width: '40px' }}
                  src={product.images.url}
                  alt=""
                />

                <span className="price">{product.types[0].price}</span>
              </div>
            ))}
            <hr />
            {/* <p>
              Total{' '}
              <span className="price" style={{color:"black"}}>
                <b></b>
              </span>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
