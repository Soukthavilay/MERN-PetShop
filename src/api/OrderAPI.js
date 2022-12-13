import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderAPI(token) {
  const [order, setOrder] = useState([]);
  
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [callback, setCallback] = useState(false);
  const [processed,setProcessed] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get('/api/orders');
        setOrder(res.data);
      } catch (err) {
        alert(err.response.data.msg);
      }
    };
    getOrder();
  }, [callback]);
  const AddOrder = async (product, type) => {
    if (!isLogged) return alert('Please login to continue buying');
  };
  return {
    order: [order, setOrder],
    callback: [callback, setCallback],
    processed:[processed,setProcessed],
  };
}

export default OrderAPI;
