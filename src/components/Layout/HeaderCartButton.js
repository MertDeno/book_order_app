import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemActions } from '../../store/addItem';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
    const amountOfAddedItems = useSelector(state => state.addItem.amountOfItems)
    const isBtnClicked = useSelector(state => state.addItem.isAddBtnClicked)
    const dispatch = useDispatch()
    let addedItemsArray = useSelector(state => state.addItem.addedItems)
    const btnClass = `${classes.headerButton} ${isBtnClicked ? classes.bump : ''}`

    useEffect(() => {
        if(addedItemsArray.length > 0){
            dispatch(addItemActions.itemDidntAdd())
        }

        const timer = setTimeout(() => {
            dispatch(addItemActions.itemAdded())
        }, 300)

        return () => {
            clearTimeout(timer)
        }
        
    }, [addedItemsArray])

    return (
        <button className={btnClass} onClick={props.btnClicked}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {amountOfAddedItems}
            </span>
        </button>
    );
}

export default HeaderCartButton;