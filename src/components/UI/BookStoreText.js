import React from 'react';
import classes from './BookStoreText.module.css'

function BookStoreText(props) {
    return (
        <section className={classes.modal}>
            <h1>Enjoyable Books, Delivered To You</h1>
            <h3>
                Choose your favorite book from our broad selection of available book and enjoy a book at home
            </h3>
            <h3>
                All our books are translated with high-quality translators, just-in-time and of course by experienced writers!           
            </h3>
        </section>
    );
}

export default BookStoreText;