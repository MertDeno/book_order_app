import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Layout/Header'
import BooksCard from './components/BooksSection/BooksCard';
import BookStoreMessage from './components/UI/BookStoreMessage';
import Cart from './components/Cart/Cart'
import { useDispatch } from 'react-redux';
import { orderItemActions } from './store/orderItem';
import { confirmItemActions } from './store/confirmItem';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const dispatch = useDispatch()
  
  const showCartHandler = () => {
    setIsCartVisible(true)
  }

  const hideCartHandler = () => {
    dispatch(orderItemActions.setIsOrderBtnClickedFalse())
    setIsCartVisible(false)
    dispatch(confirmItemActions.setCartConfirmedToFalse())
  }

  return (
    <React.Fragment>
      <Header showCartHandler={showCartHandler}/>
      <BookStoreMessage/>
      {isCartVisible && <Cart onCloseClicked={hideCartHandler}/>}
      <BooksCard />
    </React.Fragment>
  );
}

export default App;
