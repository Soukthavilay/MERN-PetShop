import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import { FaStar } from 'react-icons/fa';
import Feedback from './Feedback';
import axios from 'axios';
import FeedbackItem from './FeedbackItem';
import Rating from 'react-rating';
import gsap from 'gsap';

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);
  const [type, setType] = useState();
  const [feedback, setFeedback] = useState([]);
  const [result, setResult] = useState(0);
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
  useEffect(() => {
    if (feedback) {
      var total = 0;
      feedback.map((item) => {
        total += item.rating;
      });
      setResult(total / feedback.length);
    }
  }, [feedback]);

  // useEffect(() => {
  //     feedback.map(item=>{
  //       console.log(item.rating)
  //     })
  //     setTotal(total);
  // }, []);
  // var sum= 0;
  // useEffect(() => {
  //   const obj = feedback.forEach(item=>{
  //     setScore(item.rating)
  //   })
  // },[]);
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      repeatDelay: 1,
      yoyo: true,
      scale: 1.5,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  if (detailProduct.length === 0) return null;
  console.log(detailProduct);
  const checktype = (event) => {
    const id = event.target.value;
    const types = detailProduct.types;
    const type2 = types.filter((t) => t._id === id);
    console.log(type2);
    setType(type2[0]);
  };
  const colors = {
    orange: '#FFA500',
    grey: '#808080',
  };
  console.log(feedback);

  return (
    <>
      <div className="detail">
        <img
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          src={detailProduct.images.url}
          alt=""
        />
        <div className="box-detail">
          <div className="row">
            <h3>{detailProduct.title}</h3>
          </div>
          <p>
            <Rating
              initialRating={result}
              emptySymbol={<FaStar color={colors.grey} className="icon" />}
              fullSymbol={<FaStar color={colors.orange} className="icon" />}
              readonly
            />
            &nbsp;{feedback.length} reviews
          </p>
          <div className="underline"></div>
          <br />
          <span>{type.price} $</span>&nbsp;&nbsp;&nbsp;&nbsp;stock: <span>{type.amount}</span>
          <p>{detailProduct.description}</p>
          <b />
          <label htmlFor="types">Choose a type:</label>
          <select onChange={checktype} name="type" id="type">
            {detailProduct.types.map((type) => (
              <option key={type._id} value={type._id}>
                {type.name}
              </option>
            ))}
          </select>
          <Link
            to={`/detail/${detailProduct._id}`}
            className="cart"
            onClick={() => addCart(detailProduct, type)}
          >
            Add to cart
          </Link>
        </div>
      </div>
      <br />
      <div className="description-detail">
        <h1>Description</h1>
        <hr />
        <p>{detailProduct.description}</p>
      </div>
      <Feedback feedback={feedback} />
      <br />
      <div className="product-info-tabs">
        <div className="header-feedback">
          <h3> Product review ({feedback.length})</h3>
          <div className="underline2"></div>
        </div>
        <div className="feedback-item">
          {feedback.map((feedbacks) => {
            return <FeedbackItem key={feedbacks._id} feedbacks={feedbacks} />;
          })}
        </div>
        <br />
      </div>
      <br />
      <div>
        <h2 className="h2">Related Products</h2>
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
