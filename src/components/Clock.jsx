import React, { useState, useEffect, useRef } from 'react'
import ButtonsBreak from './ButtonsBreak'
import SphereBig from './SphereBig'
import ButtonsSession from './ButtonsSession'
import Panel from './Panel'

import './styles/clock.css'


const Clock = () => {
    
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [timerOn, setTimerOn] = useState(false);
    const [onBreak, setOnBreak] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime === 0) {
                        audioRef.current.play();
                        setOnBreak(!onBreak);
                        return onBreak ? sessionLength * 60 : breakLength * 60;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else if (!timerOn && timeLeft !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn, sessionLength, breakLength, onBreak]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleReset = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setBreakLength(5);
        setSessionLength(25);
        setTimeLeft(25 * 60);
        setTimerOn(false);
        setOnBreak(false);
        document.getElementById('start_stop').checked = false;
    };

    const handleBreakIncrement = () => {
        setBreakLength((prev) => (prev < 60 ? prev + 1 : prev));
        /* if (breakLength < 60) setBreakLength(breakLength + 1); */
    };

    const handleBreakDecrement = () => {
        setBreakLength((prev) => prev > 1 ? prev - 1 : prev);
        /* if (breakLength > 1) setBreakLength(breakLength - 1); */
    };

    const handleSessionIncrement = () => {
        if (sessionLength < 60) {
            setSessionLength(sessionLength + 1);
            if (!timerOn) setTimeLeft((sessionLength + 1) * 60);
        }
    };

    const handleSessionDecrement = () => {
        if (sessionLength > 1) {
            setSessionLength(sessionLength - 1);
            if (!timerOn) setTimeLeft((sessionLength - 1 ) * 60);
        }
    };

    const handleStartStop = () => {
        setTimerOn(!timerOn);
        !timerOn ? document.getElementById('start_stop').checked = false : document.getElementById('start_stop').checked = true;
    };


    return (
        <div className="clock">
            <ButtonsBreak 
                breakLength={breakLength}
                handleBreakDecrement={handleBreakDecrement}
                handleBreakIncrement={handleBreakIncrement}
            />
            <SphereBig 
                breakLength={breakLength}
                sessionLength={sessionLength}
                timeLeft={formatTime(timeLeft)}
                onBreak={onBreak}
            />
            <ButtonsSession 
                sessionLength={sessionLength}
                handleSessionDecrement={handleSessionDecrement}
                handleSessionIncrement={handleSessionIncrement}
            />
            <Panel 
                handleStartStop={handleStartStop}
                handleReset={handleReset}
                timerOn={timerOn}
            />
            <audio ref={audioRef} 
                /* src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" */ 
                src="./Chord_3.mp3"
            />
        </div>
    )
}

export default Clock