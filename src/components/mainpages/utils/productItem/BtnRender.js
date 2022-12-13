import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';
import { AiOutlinePlusCircle, AiFillEdit, AiOutlineEye } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';

function BtnRender({ product, deleteProduct }) {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;
  const addCart = state.userAPI.addCart;

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
          <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
            <AiOutlinePlusCircle />
          </Link>
          <Link id="btn_view" to={`/detail/${product._id}`}>
                        <AiOutlineEye/>
                    </Link>
        </>
      )}
    </div>
  );
}

export default BtnRender;
