import { useDispatch } from 'react-redux';
import { addItemActions } from '../../store/addItem';
import './BookItem.module.css'
import BookItemForm from './BookItemForm';

function BookItem(props) {
    const dispatch = useDispatch()
    
    const addItemHandler = (enteredAmount) => {
        dispatch(addItemActions.addItem({
            id: props.id,
            author: props.author,
            description: props.description,
            name: props.name,
            amount: enteredAmount,
            price: props.price            
        }))

        dispatch(addItemActions.calculatePrice(props.price * enteredAmount))
    }
    

    return (
        <li>
            <div>
                <h3>{props.name}</h3>
                <p>{props.author}</p>
                <i>{props.description}</i>
                <p>${props.price}</p>
            </div>
            <div>
                <BookItemForm addItemHandler={addItemHandler}/>
            </div>
        </li>
    );
}

export default BookItem;