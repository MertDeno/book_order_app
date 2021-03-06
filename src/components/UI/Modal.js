import React, { Fragment } from 'react';
import classes from './Modal.module.css'
import reactDom from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

function Modal(props) {
    return (
        <Fragment>
            {reactDom.createPortal(<Backdrop/>, portalElement)}
            {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
}

export default Modal;