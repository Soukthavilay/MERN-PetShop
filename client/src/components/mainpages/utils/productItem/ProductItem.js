import React from 'react';
import BtnRender from './BtnRender';
import {Link} from 'react-router-dom'
function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
  return (
    <div className="product_card">
      {isAdmin && (
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product._id)}
        />
      )}
      <img src={product.images.url} alt="" />

      <div className="product_box">
        <span>{product.category}</span>
        <h2 title={product.title}>
          <Link to={`/detail/${product._id}`}>{product.title}</Link>
        </h2>
        <p>{product.description}</p>
        <div className="price">{product.types[0].price}Đ</div>
      </div>

      <BtnRender product={product} deleteProduct={deleteProduct} />
    </div>
  );
}

export default ProductItem;
