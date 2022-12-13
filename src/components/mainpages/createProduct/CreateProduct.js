import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { GlobalState } from '../../../GlobalState';
import Loading from '../utils/loading/Loading';
import { useHistory, useParams } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const initialState = {
  title: '',
  types: [
    {
      name: '120KG',
      price: 18000,
      amount: 10,
    },
    {
      name: '180KG',
      price: 19000,
      amount: 10,
    },
    {
      name: '190KG',
      price: 20000,
      amount: 10,
    },
  ],

  description:
    'Stock up on the perfect afternoon snack, lunchtime side or baking choice with a Three-Pound Bag of Honeycrisp Apples from Good & Gather™. Boasting the perfect blend of sweet and crisp flavors, these delicious Honeycrisp apples promise to hit the spot when you’re craving something fresh and tasty, and the crisp, juicy texture is sure to satisfy.',
  category: '',
  _id: '',
};

function CreateProduct() {
  const state = useContext(GlobalState);
  console.log(state.productsAPI.products);
  const [product, setProduct] = useState(initialState);
  const [categories] = state.categoriesAPI.categories;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;

  const history = useHistory();
  const param = useParams();

  const [products] = state.productsAPI.products;
  const [onEdit, setOnEdit] = useState(false);
  const [callback, setCallback] = state.productsAPI.callback;
  // console.log(JSON.stringify(product.types[0].name))

  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (value, i) => {};
  useEffect(() => {
    if (param.id) {
      setOnEdit(true);
      products.forEach((product) => {
        if (product._id === param.id) {
          setProduct(product);
          setImages(product.images);
        }
      });
    } else {
      setOnEdit(false);
      setProduct(initialState);
      setImages(false);
    }
  }, [param.id, products]);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return alert('Bạn Không Phải là admin');
      const file = e.target.files[0];

      if (!file) return alert('Tệp không tồn tại.');

      if (file.size > 1024 * 1024)
        // 1mb
        return alert('Size ảnh lớn quá . Hãy thử đổi ảnh khác');

      if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        // 1mb
        return alert('Tệp không đúng. Hãy kiểm tra lại ');

      let formData = new FormData();
      formData.append('file', file);

      setLoading(true);
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token,
        },
      });
      setLoading(false);
      setImages(res.data);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleDestroy = async () => {
    try {
      if (!isAdmin) return alert('Bạn không phải là admin');
      setLoading(true);
      await axios.post(
        '/api/destroy',
        { public_id: images.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return alert('Bạn không phải là admin');
      if (!images) return alert('Hình ảnh chưa tải lên');

      if (onEdit) {
        await axios.put(
          `/api/products/${product._id}`,
          { ...product, images },
          {
            headers: { Authorization: token },
          }
        );
      } else {
        await axios.post(
          '/api/products',
          { ...product, images },
          {
            headers: { Authorization: token },
          }
        );
      }
      setCallback(!callback);
      history.push('/');
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const styleUpload = {
    display: images ? 'block' : 'none',
  };

  return (
    <div className="create_product">
      <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleUpload} />
        {loading ? (
          <div id="file_img" className="no-line">
            <Loading />
          </div>
        ) : (
          <div id="file_img" style={styleUpload}>
            <img src={images ? images.url : ''} alt="" />
            <span onClick={handleDestroy}>X</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="title">Name</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={product.title}
            onChange={handleChangeInput}
            disabled={onEdit}
          />
        </div>
        <label htmlFor="title">Types</label>
        <div className="row-type">
          <div>
            <input
              type="text"
              name="types"
              id="types"
              // placeholder={JSON.stringify(product)}
              required
              value={product.types[0].name}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              required
              value={product.types[0].price}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <input
              type="text"
              name="amount"
              id="amount"
              placeholder="Amount"
              required
              value={product.types[0].amount}
              onChange={handleChangeInput}
            />
          </div>
          <p id="output"></p>
          <button className="btn-type" onClick={() => handleAdd()}>
            <AiOutlinePlusCircle />
          </button>
          {val.map((data, i) => {
            return (
              <div>
                <input onChange={(e) => handleChange(e, i)} />
                <button>x</button>
              </div>
            );
          })}
        </div>

        {/* <div className="row">
          <label htmlFor="price">Giá</label>
          <input
            type="number"
            name="price"
            id="price"
            required
            value={product.price}
            onChange={handleChangeInput}
          />
        </div> */}
        {/* <div className="row">
          <label htmlFor="price">Số Lượng</label>
          <input
            type="number"
            name="amount"
            id="amount"
            required
            value={product.amount}
            onChange={handleChangeInput}
          />
        </div> */}

        <div className="row">
          <label htmlFor="description">Mô tả Sản Phẩm</label>
          <textarea
            type="text"
            name="description"
            id="description"
            required
            value={product.description}
            rows="5"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="categories">Loại Sản Phẩm: </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChangeInput}
          >
            <option value="">Hãy Chọn Loại Sản Phẩm</option>
            {categories.map((category) => (
              <option value={category._id} key={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">{onEdit ? 'Sửa' : 'Tạo Mới'}</button>
      </form>
    </div>
  );
}

export default CreateProduct;
