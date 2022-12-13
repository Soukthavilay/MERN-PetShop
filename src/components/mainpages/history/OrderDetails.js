import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';

function OrderDetails() {
  const state = useContext(GlobalState);
  // console.log(state)
  const [history] = state.userAPI.history;
  //console.log(history)
  const [orderDetails, setOrderDetails] = useState([]);

  const params = useParams();
  
  useEffect(() => {
    if (params.id) {
      history.forEach((item) => {
        if (item._id === params.id) setOrderDetails(item);
        console.log(item);
      });
    }
  }, [params.id, history]);

  if (orderDetails.length === 0) return null;
  //const product_id = orderDetails.listOrderItems[0].product_id;
  //console.log(product_id)
  //const product = orderDetails.listOrderItems;
  return (
    <div className="history-page">
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Địa Chỉ</th>
            <th>SDT</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{orderDetails.user_id}</td>
            <td>{orderDetails.address}</td>
            <td>{orderDetails.phone}</td>
            <td>{orderDetails.status
}</td>
          </tr>
        </tbody>
      </table>

      <table style={{ margin: '30px 0px' }}>
        <thead>
          <tr>
            <th></th>
            <th>Sản Phẩm</th>
            <th>Số Lượng</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.listOrderItems.map((item) => (
            <tr key={item._id}>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>{item.product_id}</td>
              <td>{item.amount}</td>
              <td>$ {orderDetails.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetails;
