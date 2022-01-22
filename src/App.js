import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import Books from './Components/Main/Books';
import Categories from './Components/Main/Categories';
import HorizontalLinearStepper from './Components/Stepper';

function App() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [dark, setDark] = useState(true);
  const addText = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div className={dark ? 'App' : 'App light'}>
      <Routes>
        <Route
          path="/"
          element={<HorizontalLinearStepper addText={addText} />}
        />
        <Route
          path="/books"
          element={
            <>
              <Header dark={dark} setDark={setDark} users={users} />
              <Books books={books} setBooks={setBooks} />
            </>
          }
        />
        <Route
          path="/categories"
          element={
            <>
              <Header dark={dark} setDark={setDark} users={users} />
              <Categories books={books} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
