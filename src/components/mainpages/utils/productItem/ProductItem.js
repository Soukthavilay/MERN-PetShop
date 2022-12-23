import React, { useContext, useState, useEffect } from 'react';
import BtnRender from './BtnRender';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';
function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
  const state = useContext(GlobalState);
  const [categoriesName] = state.categoriesAPI.categories;
  //console.log(state.categoriesAPI.categories)
  const [newCate,setNewCate] = useState('')
  useEffect(() => {
    categoriesName.forEach((item) => {
      //console.log(item);
      if (item._id == product.category) {
        setNewCate(item.name);
      }
    });
  }, []);
  // console.log(product)
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
        <span>{newCate}</span>
        <h2 title={product.title}>
          <Link to={`/detail/${product._id}`}>{product.title}</Link>
        </h2>
        <p>{product.description}</p>
        <div className="price">{product.types[0].price} $</div>
      </div>

      <BtnRender product={product} deleteProduct={deleteProduct} />
    </div>
  );
}

export default ProductItem;
