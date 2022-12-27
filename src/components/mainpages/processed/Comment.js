import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';
import Loading from '../utils/loading/Loading';
import Star from '../detailProduct/Star';
import { useHistory } from 'react-router-dom';
import Rating from 'react-rating';

const Comment = () => {
  const state = useContext(GlobalState);
  const params = useParams();
  const [product_id, setProduct_id] = useState();
  const [content, setContent] = useState('');
  const [score, setScore] = useState(0);
  const [review] = state.orderAPI.reviews;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token] = state.token;
  const history = useHistory();
  console.log(token);
  console.log();
  useEffect(() => {
    if (params.id) {
      review.forEach((item) => {
        if (item.product_id === params.id) setProduct_id(item.product_id);
        console.log(item.product_id);
      });
    }
  }, [params.id, product_id]);
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert('Tệp không tồn tại.');
      if (file.size > 1024 * 1024)
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
      console.log(res.data);
      setImages(res.data);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const styleUpload = {
    display: images ? 'block' : 'none',
  };
  const handleDestroy = async () => {
    try {
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
    setContent({ content, [name]: value });
  };
  const handleFeedback = async (e) => {
    const result = {
      content: content.content,
      image_url: images.url,
      product_id: product_id,
      rating: score,
    };
    console.log(result);
    await axios.post(
      '/api/feedback/create',
      { ...result },
      {
        headers: { Authorization: token },
      }
    );
    console.log(result);
    alert('Thank you for your feedback !');
    history.push(`/detail/${product_id}`);
  };
  const colors = {
    orange: '#FFA500',
    grey: '#808080',
  };
  return (
    <div className="product-info-tabs">
      <p>Your rating</p>
      <Rating
        emptySymbol={<FaStar color={colors.grey} className="icon" />}
        fullSymbol={<FaStar color={colors.orange} className="icon" />}
        onChange={(rate) => setScore(rate)}
      />
      <p>Your message</p>

      <textarea
        type="text"
        name="content"
        id="content"
        placeholder="comment your feedback"
        onChange={handleChangeInput}
      />
      <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleUpload} />
        {loading ? (
          <div id="file_img">
            <Loading />
          </div>
        ) : (
          <div id="file_img" style={styleUpload}>
            <img src={images ? images.url : ''} alt="" />
            <span onClick={handleDestroy}>X</span>
          </div>
        )}
      </div>
      <br />
      <button type="button" className="btn-review" onClick={handleFeedback}>
        SUBMIT REVIEW
      </button>
    </div>
  );
};

export default Comment;
