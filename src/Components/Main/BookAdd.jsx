import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function BookAdd({ setBooks, books, progress }) {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const addBook = () => {
    if (title !== '' && author !== '' && category !== '') {
      setBooks([
        ...books,
        { title: title, author: author, category: category, progress: progress },
      ]);
      setTitle('');
      setCategory('');
      setAuthor('');
    } else {
      alert('Please fill all inputs!');
    }
  };
  return (
    <div className="book-add-container">
      <h2 className="book-add-title">ADD NEW BOOK</h2>
      <div className="book-add">
        <TextField
          id="filled-required"
          label="Book Title"
          value={title}
          variant="filled"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          id="filled-required"
          label="Author"
          value={author}
          variant="filled"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={'Action'}>Action</MenuItem>
            <MenuItem value={'Comedy'}>Comedy</MenuItem>
            <MenuItem value={'Economy'}>Economy</MenuItem>
            <MenuItem value={'Science Fiction'}>Science Fiction</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={addBook}>
          ADD BOOK
        </Button>
      </div>
    </div>
  );
}
