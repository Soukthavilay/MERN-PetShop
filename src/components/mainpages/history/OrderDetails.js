import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';

function OrderDetails() {
  const state = useContext(GlobalState);
  //console.log(state)
  const [history] = state.userAPI.history;
  
  const [review, setReview] = state.orderAPI.reviews;

  const [orderDetails, setOrderDetails] = useState([]);
  const [isAdmin] = state.userAPI.isAdmin;
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      history.forEach((item) => {
        if (item._id === params.id) {
          setOrderDetails(item);
          setReview(item.listOrderItems);
        }
        //console.log(item);
      });
    }
  }, [params.id, history]);

  if (orderDetails.length === 0) return null;
  //const product_id = orderDetails.listOrderItems[0].product_id;
  //console.log(product_id)
  const product = orderDetails.listOrderItems;
  console.log(review);
  return (
    <div className="history-page">
      {isAdmin ? (
        <>
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
                <td>{orderDetails.status}</td>
              </tr>
            </tbody>
          </table>
          <table style={{ margin: '30px 0px' }}>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Type</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.listOrderItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                  <td>{item.product_name}</td>
                  <td>{item.amount}</td>
                  <td>{item.type_name}</td>
                  <td>$ {item.price}</td>
                  {isAdmin ? (
                    <td>
                      <Link to={`/detail/${item.product_id}`}>
                        Xem review user
                      </Link>
                    </td>
                  ) : (
                    <td>
                      <Link to={`/comment/${item.product_id}`}>review</Link>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <table style={{ margin: '30px 0px' }}>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Type</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.listOrderItems.map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.product_name}</td>
                <td>{item.amount}</td>
                <td>{item.type_name}</td>
                <td>$ {item.price}</td>
                {isAdmin ? (
                  <td>
                    <Link to={`/detail/${item.product_id}`}>
                      Xem review user
                    </Link>
                  </td>
                ) : (
                  <td>
                    <Link to={`/comment/${item.product_id}`}>review</Link>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderDetails;
