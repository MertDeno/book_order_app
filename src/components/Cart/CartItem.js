import React from 'react';
import classes from './CartItem.module.css'

function CartItem(props) {
    return (
        <li className={classes.cartItem}>
            <div>
                <h2>{props.name}</h2>
                <div>
                    <span className={classes.price}>${props.price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.button}>
                <button onClick={props.onDeleteClicked}>-</button>
                <button onClick={props.onAddClicked}>+</button>
            </div>
        </li>
    );
}

export default CartItem;