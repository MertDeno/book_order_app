import React, { useEffect, useState } from 'react';
import Books from './Books';
import './BooksCard.module.css'

function BooksList(props) { 
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const fetchBooksData = async() => {
        setIsLoading(true)
        setError(null)
        
        try {
            const response = await fetch('https://react-http-books-14c9e-default-rtdb.firebaseio.com/books.json')
            if(!response.ok){
                throw new Error("Something went wrong :(")
            }

            const booksData = await response.json();
            let booksArray = []

            for(const key in booksData){
                console.log(key)
                booksArray.push({
                    id: key,
                    author: booksData[key].author,
                    description: booksData[key].description,
                    name: booksData[key].name,
                    price: booksData[key].price
                })
            }
            setBooks(booksArray)
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchBooksData()
    },[])

    let content = <p>No books are found</p>

    if(isLoading){
        content = 
        <section>
            <p>Loading...</p>
        </section>
    }

    if(error){
        content = 
            <section>
                <p>{error}</p>
            </section>
    }

    if(books.length > 0){
        content = <Books data={books}/>
    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
}

export default BooksList;