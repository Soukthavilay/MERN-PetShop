import React, { useState, useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';

function Type() {
  const state = useContext(GlobalState);
  const [types] = state.typesAPI.types;
  const [type, setType] = useState('');
  const [token] = state.token;
  const [callback, setCallback] = state.typesAPI.callback;
  const [onEdit, setOnEdit] = useState(false);
  const [id, setID] = useState('');

  const CreateType = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        const res = await axios.put(
          `/api/type/${id}`,
          { name: type },
          {
            headers: { Authorization: token },
          }
        );
        alert(res.data.msg);
      } else {
        const res = await axios.post(
          '/api/type',
          { name: type },
          {
            headers: { Authorization: token },
          }
        );
        alert(res.data.msg);
      }
      setOnEdit(false);
      setType('');
      setCallback(!callback);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="type">
        <form onSubmit={CreateType}>
            <label htmlFor="type">type</label>
            <input type="text" name="type" value={type} required
            onChange={e => setType(e.target.value)} />

            <button type="submit">{onEdit? "Sửa" : "Tạo"}</button>
        </form>

        <div className="col">
            {
                types.map(type => (
                    <div className="row" key={type._id}>
                        <p>{type.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
)
}

export default Type;
