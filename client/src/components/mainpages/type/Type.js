import React, { useState, useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';

function Type() {
  const state = useContext(GlobalState);
  const [types, setTypes] = state.typesAPI.type;
  const [type, setType] = useState('');
  console.log(types);
  return (
    <>
      <div class="type">
        <form>
          <div class="row">
            <div class="col-25">
              <label for="tname">Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="tname"
                name="nameType"
                placeholder="120 KG"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="ptype">Price</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="pname"
                name="price"
                placeholder="10-10000000000"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="tamount">Amount</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="tamount"
                name="amount"
                placeholder="1-100000000"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="tproduct">Product</label>
            </div>
            <div class="col-75">
              <select id="tproduct" name="tproduct">
                <option value="PE001">PE001</option>
                <option value="PE002">PE002</option>
                <option value="PE003">PE003</option>
              </select>
            </div>
          </div>
          <br />
          <div class="row">
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Type;
