import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BasicModal from './Modal';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function BooksContainer({
  books,
  setBooks,
  setProgress,
  progress,
}) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState({});
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const progressUpdate = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };
  const handleOpen = (book) => {
    setEdit(book);
    setTitle(book.title);
    setAuthor(book.author);
    setCategory(book.category);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const deleteBook = (book) => {
    setBooks(books.filter((elem) => elem !== book));
  };
  return (
    <div className="books">
      <div className="line"></div>
      <BasicModal
        setTitle={setTitle}
        setAuthor={setAuthor}
        setCategory={setCategory}
        title={title}
        author={author}
        category={category}
        edit={edit}
        books={books}
        setBooks={setBooks}
        open={open}
        handleClose={handleClose}
      />
      <h2 className="title">BOOKS</h2>
      {books.map((book, index) => {
        return (
          <div className="book" key={index}>
            <div className="left-side">
              <h4>{book.category}</h4>
              <h2>{book.title}</h2>
              <h3>Author: {book.author}</h3>
              <div className="buttons">
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    deleteBook(book);
                  }}
                >
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={() => {
                    handleOpen(book);
                  }}
                >
                  Edit
                </Button>
              </div>
            </div>
            <div className="right-side">
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: 100, height: 100 }}
                >
                  <CircularProgressbar value={progress} />
                </div>
                <h3>{progress}%</h3>
              </div>
              <Button variant="contained" onClick={progressUpdate}>
                UPDATE PROGRESS
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
