import React, { useState } from 'react';
import BookAdd from './BookAdd';
import BooksContainer from './BooksContainer';
import './main.scss'

export default function Books({setBooks,books}) {
  const [progress, setProgress] = useState(0);
  return (
    <div className='books-container'>
      <BookAdd progress={progress} setBooks={setBooks} books={books}/>
      <BooksContainer progress={progress} setProgress={setProgress} books={books} setBooks={setBooks}/>
    </div>
  );
}
