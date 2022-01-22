import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  handleClose,
  edit,
  setBooks,
  books,
  title,
  author,
  category,
  setTitle,
  setAuthor,
  setCategory
}) {
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const editBook = (edit) => {
    if (title !== '' && author !== '' && category !== '') {
      let index = books.indexOf(edit);
      let arr = books;
      arr[index].title = title;
      arr[index].author = author;
      arr[index].category = category;
      setBooks(arr);
      handleClose();
    }
    else {
      alert('Dont let inputs empty!')
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-content">
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
          <Button
            variant="contained"
            onClick={() => {
              editBook(edit);
            }}
          >
            EDIT BOOK
          </Button>
        </Box>
      </Modal>
    </>
  );
}
