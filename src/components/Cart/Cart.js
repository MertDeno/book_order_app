import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemActions } from '../../store/addItem';
import { orderItemActions } from '../../store/orderItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CartOrderBtn from './CartOrderBtn';
import Checkout from '../UI/Checkout'
import Confirm from './Confirm';
import { confirmItemActions } from '../../store/confirmItem';
import { sendCartData } from '../../store/app-action';

function Cart(props) {
    const booksArray = useSelector(state => state.addItem.addedItems)
    const isOrderClicked = useSelector(state => state.orderItem.isOrderBtnClicked)
    const showConfirmCard = useSelector(state => state.confirmItem.isCartConfirmed)
    let totalPriceAmount = useSelector(state => state.addItem.totalPrice)
    
    const dispatch = useDispatch()
    
    const addButtonHandler = (book, price) => {
        console.log(booksArray)
        dispatch(addItemActions.calculatePrice(price))
        dispatch(addItemActions.addItem({...book, amount:1}))
        dispatch(addItemActions.summationOfNumberOfItems(price))
    }    

    const deleteButtonHandler = (book, price) => {
        console.log(booksArray)
        dispatch(addItemActions.removeItem(book))
        if(booksArray[0].amount === 1){
            dispatch(orderItemActions.setIsOrderBtnClickedFalse())
        }
        dispatch(addItemActions.substractionOfNumberOfItems(price))
    }    

    const onOrderClicked = () => {
        dispatch(orderItemActions.setIsOrderBtnClicked())
    }

    const confirmCarHandler = () => {
        dispatch(sendCartData(booksArray))
    }

    return (
        <Modal>
            {!showConfirmCard && 
                <div>
                    <ul>
                        {booksArray.length > 0 &&
                            booksArray.map((book) => (
                                <CartItem
                                    id={book.id}
                                    key={book.id}
                                    name={book.name}
                                    price={book.price}
                                    amount={book.amount}
                                    onAddClicked={addButtonHandler.bind(null, book, book.price)}
                                    onDeleteClicked={deleteButtonHandler.bind(null, book, book.price)}
                                    />
                            ))
                        }
                    </ul>
                    <div className={classes.info}>
                        <span>
                            Total Amount
                        </span>
                        <span>
                            ${`${totalPriceAmount.toFixed(2)}`}
                        </span>
                    </div>
                    <CartOrderBtn data={booksArray} onCloseClicked={props.onCloseClicked} onOrderClicked={onOrderClicked}/>
                    {(isOrderClicked && booksArray.length > 0) && <Checkout onCloseClicked={props.onCloseClicked} onConfirmClicked={confirmCarHandler}/>}
                </div>
            }
            {showConfirmCard && <Confirm onClick={props.onCloseClicked}/>}
        </Modal>
    );
}

export default Cart;