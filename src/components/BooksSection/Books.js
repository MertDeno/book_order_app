import React from 'react';
import BookItem from './BookItem';
import classes from './Books.module.css'

function Books(props) {    
    return (
        <section className={classes.list}>
            <ul>
                {props.data.map((book) =>
                    <BookItem 
                        key={book.id}
                        id={book.id}
                        name={book.name}
                        author={book.author}
                        description={book.description}
                        price={book.price}/>
                )}
            </ul>
        </section>
    );
}

export default Books;