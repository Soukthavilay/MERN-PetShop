import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { GlobalState } from '../../../GlobalState';
import Loading from '../utils/loading/Loading';
import { useHistory, useParams } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const initialState = {
  title: '',
  description:
    'Stock up on the perfect afternoon snack, lunchtime side or baking choice with a Three-Pound Bag of Honeycrisp Apples from Good & Gather™. Boasting the perfect blend of sweet and crisp flavors, these delicious Honeycrisp apples promise to hit the spot when you’re craving something fresh and tasty, and the crisp, juicy texture is sure to satisfy.',
  category: '',
  _id: '',
};

let nextId = 0;
function CreateProduct() {
  const state = useContext(GlobalState);

  const [product, setProduct] = useState(initialState);
  const [categories] = state.categoriesAPI.categories;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  console.log(token);

  const history = useHistory();
  const param = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [amount, setMount] = useState();
  const [types, setTypes] = useState([]);

  const [products] = state.productsAPI.products;
  const [onEdit, setOnEdit] = useState(false);
  const [callback, setCallback] = state.productsAPI.callback;
  // console.log(JSON.stringify(product.types[0].name))
  const [edit,setEdit] = useState();
 
  useEffect(() => {}, []);
  useEffect(() => {
    if (param.id) {
      console.log(products);
      setOnEdit(true);
      products.forEach((product) => {
        if (product._id === param.id) {
          console.log(product);
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
      if (!isAdmin) return alert('you not admin');
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
      if (!isAdmin) return alert('you not admin');
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
      const re = [];
      for (const test of types) {
        var obj = {
          name: test.name,
          price: test.price,
          amount: test.amount,
        };
        // console.log(test);
        re.push(obj);
        //setOrderItem(obj);
      }
      console.log(re);
      const rs = {
        title: product.title,
        description: product.description,
        category: product.category,
        types: re,
      };

      if (!isAdmin) return alert('you not admin');
      if (!images) return alert('image not upload');

      if (onEdit) {
        await axios.put(
          `/api/products/${product._id}`,
          { ...rs, images },
          {
            headers: { Authorization: token },
          }
        );
      } else {
        console.log(rs);
        await axios.post(
          '/api/products',
          { ...rs, images },
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
      {onEdit ? (
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
              // disabled={onEdit}
            />
          </div>
          <label htmlFor="title">Types</label>
          <div className="row-type">
            <div>
              <input
                type="text"
                name="types"
                id="types"
                // required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                // required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="Amount"
                // required
                value={amount}
                onChange={(e) => setMount(e.target.value)}
              />
            </div>
            
            <ul>
              {product.types.map((element) => (
                <li key={element._id}>
                  name : {element.name} , price : {element.price}$ , amount :{' '}
                  {element.amount} <span onClick={handleDestroy}>X</span>
                </li>
              ))}
            </ul>
            <p id="output"></p>
            <button
              type="button"
              onClick={() => {
                setName('');
                setPrice('');
                setMount('');
                product.types.push({
                  name: name,
                  price: parseInt(price),
                  amount: parseInt(amount),
                });
              }}
            >
              Add
            </button>
            <ul>
              {types.map((artist) => (
                <li key={artist.id}>
                  name :{artist.name} , price: {artist.price} , amount:
                  {artist.amount} <span onClick={handleDestroy}>X</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="row">
            <label htmlFor="description">Description</label>
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
            <label htmlFor="categories">Categories: </label>
            <select
              name="category"
              value={product.category}
              onChange={handleChangeInput}
            >
              <option value="">Please select category</option>
              {categories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">{onEdit ? 'Edit' : 'Create'}</button>
        </form>
      ) : (
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
                // required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                // required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="Amount"
                // required
                value={amount}
                onChange={(e) => setMount(e.target.value)}
              />
            </div>
            <p id="output"></p>
            <button
              type="button"
              onClick={() => {
                setName('');
                setPrice('');
                setMount('');
                types.push({
                  id: nextId++,
                  name: name,
                  price: parseInt(price),
                  amount: parseInt(amount),
                });
                setTypes(types);
              }}
            >
              Add
            </button>
            <ul>
              {types.map((artist) => (
                <li key={artist.id}>
                  name :{artist.name} , price: {artist.price} , amount:
                  {artist.amount}{' '}
                  <button
                    onClick={() => {
                      setTypes(types.filter((a) => a.id !== artist.id));
                    }}
                  >
                    <AiOutlineCloseCircle/>
                  </button>
                </li>
              ))}
            </ul>
            <ul>
              <li>{product.type}</li>
            </ul>
          </div>
          <div className="row">
            <label htmlFor="description">Description</label>
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
            <label htmlFor="categories">Categories: </label>
            <select
              name="category"
              value={product.category}
              onChange={handleChangeInput}
            >
              <option value="">Please select category</option>
              {categories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">{onEdit ? 'Edit' : 'Create'}</button>
        </form>
      )}
    </div>
  );
}

export default CreateProduct;