import { addItemActions } from './addItem'

export const fetchCartData = () => {
    debugger
    return async (dispatch) => {
        const fetchData = async () => {
            debugger
            const response = await fetch("https://react-http-books-post-default-rtdb.firebaseio.com/orderedBooks.json")
    
            if(!response.ok){
                throw new Error("Something went wrong")
            }

            const data = await response.json()

            return data
        }

        try {
            const cartData = await fetchData()
            dispatch(addItemActions.replaceCart(cartData))
        } catch (error) {
            console.log(error)
        }
    }
}


export const sendCartData = (booksArray) => {
    return async (dispatch) => {
        fetch("https://react-http-books-post-default-rtdb.firebaseio.com/orderedBooks.json",{
            method: 'POST',
            body: JSON.stringify({
                orderedBooks: booksArray
            })
        })
    
        dispatch(addItemActions.removeAllItems())
        dispatch(addItemActions.removeCartInfo())    
    }

}