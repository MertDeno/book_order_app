import TextField from '@mui/material/TextField';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import useTimer from '../../hooks/use-timer';
import { confirmItemActions } from '../../store/confirmItem';
import classes from './Checkout.module.css'

const isInputValid = value => value.trim() === ''
const isPostalCodeValid = value => (!isNaN(+value)) && value.trim().length === 5
const isEmailValid = value => value.includes('@') && value.trim().length > 0

function Card(props) {
    const dispatch = useDispatch()
    const {
        minutes:minutes, 
        seconds:seconds
    } = useTimer()
    
    const [formValid, setFormValid] = useState({
        name: true,
        email: true,
        street: true,
        postalCode: true,
        city: true
    })
    const nameRef = useRef()
    const emailRef = useRef()
    const streetRef = useRef()
    const postalCodeRef = useRef()
    const cityRef = useRef()

    const clickHandler = (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const street = streetRef.current.value
        const postalCode = postalCodeRef.current.value
        const city = cityRef.current.value

        const nameValid = !isInputValid(name)
        const emailValid = isEmailValid(email)
        const streetValid = !isInputValid(street)
        const postalCodeValid = isPostalCodeValid(postalCode)
        const cityValid = !isInputValid(city)

        setFormValid({
            name: nameValid, 
            email: emailValid, 
            street: streetValid, 
            postalCode: postalCodeValid,
            city: cityValid
        })

        const formIsValid = nameValid && emailValid && streetValid && postalCodeValid && cityValid

        if(!formIsValid){
            return
        }
        
        dispatch(confirmItemActions.setCartConfirmedToTrue())
        props.onConfirmClicked()
    }        

    let content = ( 
        <div className={classes.textFieldsForm}>           
            <div>
                <TextField inputRef={nameRef}  label="Name" size='small' margin='dense' 
                    color={!formValid.name ? 'error': ''} sx={!formValid.name ? {backgroundColor:"#feeef0"} : {}}/>
                    {!formValid.name && <p className={classes.errorText}>Please enter your name</p>}
            </div>
            <div>
                <TextField inputRef={emailRef}  label="E-mail" size='small' margin='dense' 
                    color={!formValid.email ? 'error': ''} sx={!formValid.email ? {backgroundColor:"#feeef0"} : {}}/>
                    {!formValid.email && <p className={classes.errorText}>Please enter your email</p>}
            </div>
            <div>
                <TextField inputRef={streetRef} label="Street" size='small' margin='dense' 
                    color={!formValid.street ? 'error': ''} sx={!formValid.street ? {backgroundColor:"#feeef0"} : {}}/>
                    {!formValid.street && <p className={classes.errorText}>Please enter your street</p>}
            </div>
            <div>
                <TextField inputRef={postalCodeRef} label="Postal Code" size='small' margin='dense' 
                    color={!formValid.postalCode ? 'error': ''} sx={!formValid.postalCode ? {backgroundColor:"#feeef0"} : {}}/>
                    {!formValid.postalCode && <p className={classes.errorText}>Please enter a correct postal code</p>}
            </div>
            <div>
                <TextField inputRef={cityRef} label="City" size='small' margin='dense' 
                    color={!formValid.city ? 'error': ''} sx={!formValid.city ? {backgroundColor:"#feeef0"} : {}}/>
                    {!formValid.city && <p className={classes.errorText}>Please enter your city</p>}
            </div>
            <div className={classes.buttonDiv}>
                <button onClick={props.onCloseClicked} className={classes.cancelBtn}>Cancel</button>
                <button className={classes.confirmBtn} onClick={clickHandler}>Confirm</button>
            </div>
        </div>)

    return (
        <form>
            <div className={classes.timer}>
                {minutes}:{seconds}
            </div>
                {content}
        </form>
    );
}

export default Card;