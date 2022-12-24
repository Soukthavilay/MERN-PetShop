import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import './processed.css';
import axios from 'axios';
const Processed = () => {
  const state = useContext(GlobalState);
  //console.log(state)
  const [process, setProcess] = state.orderAPI.processed;
  const [token] = state.token;

  console.log(token);
  console.log(process);
  const history = useHistory();
  const orderId = process._id;
  console.log(orderId);
  const tranSuccess = async (id) => {
    console.log('id = ' + id);
    const order_id = id;
    //paypal
    if (token) {
      const res = await axios.post(
        'https://petshop-bn3rzeehqq-uc.a.run.app/api/cart/checkout',
        { order_id },
        {
          headers: { Authorization: token },
        }
      );
      console.log(res.data.url);
      window.open(res.data.url, '_blank');
      //alert('Bạn đã đặt hàng thành công.');
      history.push('/history');
    }
  };
  return (
    <>
      <div className="processed">
        <div className="iphone">
          <div className="header">
            <h1>Checkout</h1>
          </div>
          <div className="form">
            <div>
              <h2>Address</h2>
              <div className="card">
                <address>
                  {process.user_id}
                  <br />
                  {process.address}
                  <br />
                  {process.phone}
                </address>
              </div>
            </div>
            <fieldset>
              <legend>Payment Method</legend>

              <div className="form__radios">
                <div className="form__radio">
                  <label for="visa">
                    <svg class="icon">
                      <use href="#icon-visa" />
                    </svg>
                    Paypal
                  </label>
                  <input checked id="visa" name="payment-method" type="radio" />
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
                <svg class="icon">
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
