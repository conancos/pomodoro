//import './styles/clock.css'
import React, {useEffect, useState} from 'react'

const SphereBig = ({breakLength, sessionLength, timer, onBreak}) => {
    //const stringOfCount = onBreak ? "Break" : "Session"
    const [stringOfCount, setStringOfCount] = useState(onBreak ? "Break" : "Session");
    const [timerCount, setTimerCount] = useState(timer);

    useEffect(() => {
        setStringOfCount(onBreak ? "Break" : "Session");
        setTimerCount(timer);
    }, [onBreak, timer]);

    return (
        <div className="sphere-big">
            <div className="break">
                <p id="break-length">{breakLength}</p>
                <p id="break-label">TIME BREAK</p>
            </div>
            <div className="timer">
                <p 
                    id="timer-label"
                    className={`${onBreak && "break-class-label"}`}
                >
                    {stringOfCount}
                    {/* {onBreak ? "Break" : "Session"} */}
                </p>
                <p 
                    id="time-left" 
                    className={`${onBreak && "break-class"}`}
                >
                    {timerCount}
                </p>
            </div>
            <div className="session">
                <p id="session-label">TIME POMODORO</p>
                <p id="session-length">{sessionLength}</p>
            </div>
        </div>
    )
}

export default SphereBig;
