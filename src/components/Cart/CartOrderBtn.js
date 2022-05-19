import React from 'react';
import { useSelector } from 'react-redux';
import classes from './CartOrderBtn.module.css'

function CartOrderBtn(props) {
    const isOrderClicked = useSelector(state => state.orderItem.isOrderBtnClicked)
    const items = useSelector(state => state.addItem.addedItems)
    debugger
    return (
        <div className={classes.actions}>
            {!isOrderClicked && <button onClick={props.onCloseClicked}>Close</button>}
            {(props.data.length > 0 && !isOrderClicked) && <button className={classes.orderBtn} onClick={props.onOrderClicked}>Order</button>}
        </div>
    );
}

export default CartOrderBtn;