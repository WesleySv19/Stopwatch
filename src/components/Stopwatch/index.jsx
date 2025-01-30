import { useRef, useState } from "react"
import styles from './StopWatch.module.css'

const StopWatch = () => {

    const [centiseconds, setCentiseconds] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const intervalRef = useRef(null)

    const handleStart = () => {
        if(intervalRef.current) return

        intervalRef.current = setInterval(() => {
            setCentiseconds((prev) => {
                if(prev === 99) {
                    setSeconds((s) => {
                        if(s === 59) {
                            setMinutes((m) => m + 1) 
                            return 0
                        }

                        return s + 1
                    })

                    return 0
                }

                return prev + 1
            })
        }, 10);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }

    const handleReseat = () => {
        handleStop()
        setCentiseconds(0)
        setSeconds(0)
        setMinutes(0)
    }

    const formatTime = (time) => String(time).padStart(2, '0')

    return (
        <div className={styles.stopwatch}>

            <div className={styles.timer}>
                <span>{formatTime(minutes)}:</span>
                <span>{formatTime(seconds)}:</span>
                <span>{formatTime(centiseconds)}</span>
            </div>

            <div className={styles.btns}>
                <button onClick={handleStart} type="button" className="btn btn-success">Iniciar</button>
                <button onClick={handleStop} type="button" className="btn btn-danger">Parar</button>
                <button onClick={handleReseat} type="button" className="btn btn-warning">Reiniciar</button>
            </div>
        </div>
    )
};

export default StopWatch;
