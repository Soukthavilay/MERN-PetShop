import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;
  console.log(search)
  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch('');
  };

  return (
    <div className="filter_menu">
      <div className="row">
        {/* <span>Lọc: </span> */}
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">All Category</option>
          {categories.map((category) => (
            <option value={'category=' + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        value={search}
        placeholder="Search product here"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      <div className="row sort">
        {/* <span>Xếp theo: </span> */}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">New product</option>
          <option value="sort=oldest">Old product</option>
          <option value="sort=-sold">Hot product</option>
          <option value="sort=-price">Price: expensive-cheap</option>
          <option value="sort=price">price: cheap-expensive</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
