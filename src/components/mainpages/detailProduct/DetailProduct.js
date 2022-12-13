import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import { AiFillStar } from 'react-icons/ai';

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);
  const [price, setPrice] = useState('');
  const [type, setType] = useState();

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) {
          setDetailProduct(product);
          //setPrice(product.types[0].price)
          setType(product.types[0]);
        }
      });
    }
  }, [params.id, products]);

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
            <AiFillStar style={{ color: 'orange' }} />
            <AiFillStar style={{ color: 'orange' }} />
            <AiFillStar style={{ color: 'orange' }} />
            <AiFillStar />
            <AiFillStar />
          </p>
          {/* <p>Đã Bán: {detailProduct.sold}</p> */}
          <div className="underline"></div>
          <br />
          <span>{type.price}Đ</span>
          <p>{detailProduct.description}</p>
          <label for="types">Choose a type:</label>
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
      <div className="product-info-tabs">
        <div className="header-feedback">
          <h3>Review</h3>
        </div>
        <h2>REVIEWS</h2>
        <p>There are no reviews yet.</p>
        <p>Your rating</p>
        <p>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </p>
        <p>Your message</p>
        <textarea type="text" name="content" placeholder="comment your feedback"/>
        <input type="text" name="name" id="name" placeholder="Name"/>
        <input type="text" name="email" id="email" placeholder="Your Email"/>
        <button type="button" name="btn-review">SUBMIT REVIEW</button>
      </div>
      <div>
        <h2>Sản Phẩm Liên Quan</h2>
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
