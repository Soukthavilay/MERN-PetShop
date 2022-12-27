import React, { useContext, useState, useEffect } from 'react';
import BtnRender from './BtnRender';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';
import { gsap } from 'gsap';

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
  const state = useContext(GlobalState);
  const [categoriesName] = state.categoriesAPI.categories;
  //console.log(state.categoriesAPI.categories)
  const [newCate, setNewCate] = useState('');
  useEffect(() => {
    categoriesName.forEach((item) => {
      //console.log(item);
      if (item._id == product.category) {
        setNewCate(item.name);
      }
    });
  }, []);
  // console.log(product)
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      repeatDelay: 1,
      yoyo: true,
      scale: 1.1,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave} className="product_card">
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
        <h2 className="content animation" title={product.title}>
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
