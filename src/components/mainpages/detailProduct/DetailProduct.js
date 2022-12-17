import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import { AiFillStar } from 'react-icons/ai';
import Feedback from './Feedback';
import axios from 'axios';
import FeedbackItem from './FeedbackItem';

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  //const [token] = state.token;
  //console.log(token);
  //console.log(products)
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);
  const [type, setType] = useState();
  const [feedback, setFeedback] = useState([]);
  console.log(feedback)
  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) {
          setDetailProduct(product);
          setType(product.types[0]);
        }
      });
    }
  }, [params.id, products]);

  useEffect(() => {
    if (params.id) {
      console.log(params.id);
      const getFeedback = async () => {
        try {
          const res = await axios.get(`/api/products/${params.id}`);
          setFeedback(res.data.feedbacks);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getFeedback();
    }
  }, [params.id]);

  if (detailProduct.length === 0) return null;
  const checktype = (event) => {
    const id = event.target.value;
    const types = detailProduct.types;
    const type2 = types.filter((t) => t._id === id);
    console.log(type2);
    setType(type2[0]);
  };


  return (
    <>
      <div className="detail">
        <img src={detailProduct.images.url} alt="" />
        <div className="box-detail">
          <div className="row">
            <h3>{detailProduct.title}</h3>
            <h6>#id: {detailProduct._id}</h6>
          </div>
          <p>
            {feedback.length} reviews
          </p>
          <div className="underline"></div>
          <br />
          <span>{type.price}Đ</span>
          <p>{detailProduct.description}</p>
          <label htmlFor="types">Choose a type:</label>
          <select onChange={checktype} name="type" id="type">
            {detailProduct.types.map((type) => (
              <option key={type._id} value={type._id}>
                {type.name}
              </option>
            ))}
          </select>
          <Link
            to="/cart"
            className="cart"
            onClick={() => addCart(detailProduct, type)}
          >
            Add to cart
          </Link>
          {/* <div>
            <p>Categories : {detailProduct.category}</p>
          </div> */}
        </div>
      </div>
      <br/>
      <Feedback feedback={feedback} />
      <br/>
      <div className="product-info-tabs">
        <div className="header-feedback">
          <h3> Product review ({feedback.length})</h3>
          <div className="underline2"></div>
        </div>
        <div className="feedback-item">
        {feedback.map((feedbacks) => {
          return (
            <FeedbackItem
              key={feedbacks._id}
              feedbacks={feedbacks}
            />
          );
        })}
        </div>
        <br />
      </div>
      <br />
      <div>
        <h2 className="h2">Sản Phẩm Liên Quan</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
