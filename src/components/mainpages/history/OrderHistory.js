import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';
import { FcApproval, FcHighPriority, FcLineChart } from 'react-icons/fc';
import axios from 'axios';
import LoadMore from '../products/LoadMore';
import Loading from '../utils/loading/Loading';

function OrderHistory() {
  const state = useContext(GlobalState);
  //console.log(state)
  const [history, setHistory] = state.userAPI.history;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  const [page, setPage] = useState(1);
  //const [myorder,setMyorder] = useState([])
  // useEffect(() => {
  //     (async ()=>{
  //         const res = await axios.get(
  //             '/api/orders',
  //             {
  //               headers: { Authorization: token },
  //             }
  //         );
  //         //console.log(res.data)
  //     })()
  // },[token])

  useEffect(() => {
    if (token) {
      const getHistory = async () => {
        if (isAdmin) {
          const res = await axios.get(`/api/orders/admin?limit=${page * 9}`, {
            headers: { Authorization: token },
          });
          setHistory(res.data);
          // console.log(res.data);
        } else {
          const res = await axios.get('/api/orders', {
            headers: { Authorization: token },
          });
          // console.log(res.data);
          setHistory(res.data);
        }
      };
      getHistory();
    }
  }, [token, isAdmin, setHistory]);
  const confirm = async (id) => {
    // e.preventDefault();
    // console.log(delivery_id);
    const rs = {
      delivery_id: "delivery_id",
      order_id: id,
    };
    if (window.confirm('Confirm this order?')) {
      console.log(rs)
      await axios.get('/api/delivery', { ...rs });
      
      alert('This order has been confirm');
    } else {
      alert('No');
    }
    // const id = e.target.value;
    console.log(id);
  };
  return (
    <div className="history-page">
      <h2>{isAdmin ? 'All Order' : 'My Order'}</h2>

      <h4>{history.length} ordered</h4>
      {isAdmin ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID Thanh Toán</th>
                <th>Ngày Mua</th>
                <th>Status</th>
                <th>Delivery</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {history.map((items) => (
                <tr key={items._id}>
                  <td>{items._id}</td>
                  <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                  <td>{items.status}</td>
                  <td>
                    <button type="button" onClick={() => confirm(items._id)}>
                      Confirm
                    </button>
                  </td>
                  <td>
                    <Link to={`/history/${items._id}`}>Xem</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                {/* <th>Item</th> */}
                <th>Ngày Mua</th>
                <th>Địa chỉ</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th>Delivery</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {history.map((items) => (
                <tr key={items._id}>
                  {/* <td>{items._id}</td> */}
                  <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                  <td>{items.address}</td>
                  <td>{items.phone}</td>
                  <td>{items.status}</td>
                  <td>
                    <img
                      className="img-correct"
                      src="https://cdn-icons-png.flaticon.com/128/4436/4436481.png"
                      width="10"
                      alt=""
                    />
                  </td>
                  <td>
                    <Link to={`/history/${items._id}`}>Xem</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <LoadMore />
      {history.length === 0 && <Loading />}
    </div>
  );
}

export default OrderHistory;
