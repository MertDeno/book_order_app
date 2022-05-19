import React from 'react';
import classes from './Header.module.css'
import bookImage from "../../assets/books2.jpg"
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactBooks</h1>
                <HeaderCartButton btnClicked={props.showCartHandler}/>
            </header>
            <div>
                <img className={classes['main-img']} src={bookImage} alt='Image of books'/>
            </div>
        </React.Fragment>
    );
}

export default Header;