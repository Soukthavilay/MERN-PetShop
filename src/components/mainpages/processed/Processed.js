import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import './processed.css';
import axios from 'axios';
import Loading from '../utils/loading/Loading';
const Processed = () => {
  const state = useContext(GlobalState);
  //console.log(state)
  const [process, setProcess] = state.orderAPI.processed;
  const [token] = state.token;
  const [detail, setDetail] = state.userAPI.detail;
  console.log(detail._id);
  const [userDetail, setUserDetail] = useState([]);
  const [loading, setLoading] = useState(false);


  console.log(process.user_id);
  useEffect(() => {
    if (detail._id == process.user_id) {
      setUserDetail(detail);
    }
  }, []);
  const history = useHistory();
  const orderId = process._id;
  // console.log(orderId);
  const tranSuccess = async (id) => {
    console.log('id = ' + id);
    const order_id = id;
    //paypal
    if (token) {
    setLoading(true);
      const res = await axios.post(       
        '/api/cart/checkout',
        { order_id },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      console.log(res.data.url);
      window.open(res.data.url, '_blank');
      //alert('Bạn đã đặt hàng thành công.');
      history.push('/history');
    }
  };
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  console.log(userDetail);
  return (
    <>
      <div className="processed">
        <div className="iphone">
          <div className="header">
            <h1>Payment</h1>
          </div>
          <div className="form">
            <div>
              <h2>Address</h2>
              <div className="card">
                <address>
                  {(() => {
                    if (detail._id == process.user_id) {
                      return (
                        <div>
                          <b>Name</b> : {detail.name}
                          <br />
                          <b>Email</b> : {detail.email}
                          <br />
                          <b>Address</b> : {process.address}
                          <br />
                          <b>Phone number</b> : {process.phone}
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <h1>Please checkout your order</h1>
                        </div>
                      );
                    }
                  })()}
                </address>
              </div>
            </div>
            <fieldset>
              <legend>Payment Method</legend>

              <div className="form__radios">
                <div className="form__radio">
                <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="" width="60"/>
                  <label htmlFor="visa">
                    <svg className="icon">
                      <use href="https://cdn-icons-png.flaticon.com/512/196/196566.png" />
                    </svg>
                    
                  </label>
                  <input
                    defaultChecked
                    id="visa"
                    name="payment-method"
                    type="radio"
                  />
                </div>
              </div>
            </fieldset>

            <div className="process-table">
              <h2>Shopping Bill</h2>

              <table>
                <tbody>
                  <tr>
                    <td>Free ship</td>
                    <td align="right">$0</td>
                  </tr>
                  <tr>
                    <td>Price Total</td>
                    <td align="right">${process.total}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td align="right">${process.total}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="btn-processed">
              <button
                className="button button--full"
                onClick={() => tranSuccess(orderId)}
              >
                <svg className="icon">
                  <use href="#icon-shopping-bag" />
                </svg>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="process-information"></div>
      </div>
    </>
  );
};

export default Processed;
