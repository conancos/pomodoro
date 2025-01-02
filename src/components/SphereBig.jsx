//import './styles/clock.css'
import React, {useState} from 'react'

const SphereBig = ({breakLength, sessionLength, timer, onBreak}) => {

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
                    {onBreak ? "Break" : "Session"}
                </p>
                <p 
                    id="time-left" 
                    className={`${onBreak && "break-class"}`}
                >
                    {timer}
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