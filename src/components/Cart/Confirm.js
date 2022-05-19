import React from 'react';
import classes from './Confirm.module.css';

function Confirm(props) {
    return (
        <div>
            {props.errorMessage}
            <div className={classes.successMessage}>
                Submitted Successfully
            </div>
            <div className={classes.btnSection}>
                <button onClick={props.onClick} className={classes.cancelBtn}>Cancel</button>
            </div>

        </div>
    );
}

export default Confirm;