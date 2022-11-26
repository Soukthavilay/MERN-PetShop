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

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

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
            <AiFillStar /> [review]
          </p>
          <p>Đã Bán: {detailProduct.sold}</p>
          <div className="underline"></div>
          <br />
          <span>{detailProduct.types[0].price}Đ</span>
          <p>{detailProduct.description}</p>
          <label for="types">Choose a type:</label>
          <select name="type" id="type">
            {detailProduct.types.map((type) => (
              <option key={type._id}>{type.name}</option>
            ))}
          </select>
          <Link
            to="/cart"
            className="cart"
            onClick={() => addCart(detailProduct)}
          >
            Add to cart
          </Link>
          <div>
            <p>Categories : {detailProduct.category}</p>
          </div>
        </div>
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
