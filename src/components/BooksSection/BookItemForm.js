import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { addItemActions } from '../../store/addItem';

function BookItemForm(props) {
    const amountInputRef = useRef()
    const dispatch = useDispatch()
    let enteredAmount = 0

    const addingBookHandler = (event) => {
        event.preventDefault();
        enteredAmount = amountInputRef.current.value
        enteredAmount = +enteredAmount
        dispatch(addItemActions.addNewItem(enteredAmount))
        props.addItemHandler(enteredAmount)
    }

    return (
        <form onSubmit={addingBookHandler}>
            <Input label="Amount" 
                input={{
                    id:"amount",
                    type: "number",
                    ref: amountInputRef,
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }}/>
            <Button>+ Add</Button>
        </form>
    );
}

export default BookItemForm;