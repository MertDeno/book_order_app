import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { orderItemActions } from "../store/orderItem"

const useTimer = () => {
    const [countdown, setCountdown] = useState(60 * 3)
    const [runTimer, setRunTimer] = useState(true)
    const dispatch = useDispatch()
    let timer;

    const seconds = String(countdown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countdown / 60)).padStart(2, 0);

    useEffect(() => {
        if(runTimer){
            timer = setInterval(() =>(
                setCountdown((prevCounter) => prevCounter - 1)
            ) , 1000)
        }else{
            clearInterval(timer)
        }
        
        return () => clearInterval(timer)
    }, [runTimer])

    useEffect(() => {
        if(countdown <= 0 && runTimer){
            dispatch(orderItemActions.setIsOrderBtnClicked())
            setRunTimer(false)
            setCountdown(0)
        }
    }, [countdown, runTimer])

    return {minutes, seconds}
}

export default useTimer