import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

export default function Categories({ books }) {
  const [category, setCategory] = useState('All');
  const handleChange = (e) =>{
    setCategory(e.target.value)
  }
  return (
    <div className='categories-container'>
      <div className="categories">
      <FormControl fullWidth className='category-filter'>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'Action'}>Action</MenuItem>
            <MenuItem value={'Comedy'}>Comedy</MenuItem>
            <MenuItem value={'Economy'}>Economy</MenuItem>
            <MenuItem value={'Science Fiction'}>Science Fiction</MenuItem>
          </Select>
        </FormControl>
        {category === 'All' ? books.map((book, index) => {
        return (
          <div className="book" key={index}>
            <div className="left-side">
              <h4>{book.category}</h4>
              <h2>{book.title}</h2>
              <h3>Author: {book.author}</h3>
            </div>
            <div className="right-side"></div>
          </div>
        );
      }) : books.filter((el)=>el.category === category).map((book, index) => {
        return (
          <div className="book" key={index}>
            <div className="left-side">
              <h4>{book.category}</h4>
              <h2>{book.title}</h2>
              <h3>Author: {book.author}</h3>
            </div>
            <div className="right-side"></div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
