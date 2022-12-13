import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';
import { AiOutlineShoppingCart, AiFillEdit, AiOutlineEye } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';

function BtnRender({ product, deleteProduct }) {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;
  const [isLogged] = state.userAPI.isLogged;
  const addCart = state.userAPI.addCart;
  const Check = async () => {
    if (!isLogged) {
      alert('Please login to continue buying');
      window.open("/login","_self");
    }else{
      alert('Please select your type to buying');
      window.open(`/detail/${product._id}`,"_self");
    }
  };
  return (
    <div className="row_btn">
      {isAdmin ? (
        <>
          <Link
            id="btn_buy"
            to="#!"
            onClick={() => deleteProduct(product._id, product.images.public_id)}
          >
            <RiDeleteBinLine />
          </Link>
          <Link id="btn_view" to={`/edit_product/${product._id}`}>
            <AiFillEdit />
          </Link>
        </>
      ) : (
        <>
          <Link id="btn_buy" onClick={() => Check()}>
            <AiOutlineShoppingCart />
          </Link>
          <Link id="btn_view" to={`/detail/${product._id}`}>
            <AiOutlineEye style={{ display: 'none'}}/>
          </Link>
        </>
      )}
    </div>
  );
}

export default BtnRender;
