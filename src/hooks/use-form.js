import { useState } from "react"


const useForm = (validateValid) => {
    const [enteredValue, setEnteredValue] = useState(false)
    const [enteredPostalCode, setEnteredPostalCode] = useState(false)

    const enteredValueValid = validateValid(enteredValue)

    const setValueHandler = (event) => {
        setEnteredValue(event.target.value)
    } 

    return {
        enteredValue,
        isValueValid: enteredValueValid
    }
}

export default useForm