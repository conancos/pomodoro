import React, { useState, useEffect, useRef } from 'react'
import ActionButton from './ActionButton'
import SphereBig from './SphereBig'
import Panel from './Panel'

import './styles/clock.css'

const Clock = () => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timer, setTimer] = useState(25 * 60);
    const [timerOn, setTimerOn] = useState(false);
    const [onBreak, setOnBreak] = useState(false);
    const intervalRef = useRef(null);
    const audioRef = useRef(null);
    //const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        
        if (timerOn) {
            intervalRef.current = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    } else {
                        audioRef.current.play().catch((err) => console.log('Audio play error:', err));
                        const nextOnBreak = !onBreak;
                        setOnBreak(nextOnBreak);
                        
                        setTimeout(() => {
                            setTimer(nextOnBreak ? breakLength * 60 : sessionLength * 60);
                        }, 1000);
                        return 0;
                    }
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [timerOn, onBreak, sessionLength, breakLength]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        /* const padZero = (num) => (num < 10 ? `0${num}` : num);
        return `${padZero(minutes)}:${padZero(seconds)}`; */
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTimerOn(false);
        setOnBreak(false);
        setBreakLength(5);
        setSessionLength(25);
        setTimer(25 * 60);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            document.getElementById('input-start_stop').checked = false;
        }
    };

    const handleBreakIncrement = () => {
        /* setBreakLength((prev) => prev < 60 ? prev + 1 : prev); */
        if (breakLength < 60/* && !timerOn */) {
            setBreakLength((prev) => prev + 1);
        }
    };
        
    const handleBreakDecrement = () => {
        /* setBreakLength((prev) => prev > 1 ? prev - 1 : prev); */
        if (breakLength > 1/* && !timerOn*/) {
            setBreakLength((prev) => prev - 1);
        }
    };

    const handleSessionIncrement = () => {
        if (sessionLength < 60) {
            setSessionLength((prev) => prev + 1);
            if (!onBreak) {
                setTimer((prev) => prev + 60);
            }
        }
      };

    const handleSessionDecrement = () => {
        if (sessionLength > 1) {
            setSessionLength((prev) => prev - 1);
            if (!onBreak) {
                setTimer((prev) => prev - 60);
            }
        }
    };

    const handleStartStop = () => {
        setTimerOn((prev) => !prev);
    };

    const handleAudioError = () => {
        console.error('El archivo de audio no se pudo cargar');
    };

    return (
        <div className="clock">
            <ActionButton 
                id="buttons-break"
                className="buttons-top"
                actionDecrement={'break-decrement'}
                actionIncrement={'break-increment'}
                handleDecrement={handleBreakDecrement}
                handleIncrement={handleBreakIncrement}
            />
            <SphereBig 
                breakLength={breakLength}
                sessionLength={sessionLength}
                timer={formatTime(timer)}
                onBreak={onBreak}
            />
            <ActionButton 
                id="buttons-session"
                className="buttons-bottom"
                actionDecrement={'session-decrement'}
                actionIncrement={'session-increment'}
                handleDecrement={handleSessionDecrement}
                handleIncrement={handleSessionIncrement}
            />
            <Panel 
                handleStartStop={handleStartStop}
                handleReset={handleReset}
                timerOn={timerOn}
            />
            <audio 
                ref={audioRef} 
                id="beep" 
                preload="auto"
                onError={handleAudioError}
                src="./Chord_3.mp3"
                /* src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" */
            />
        </div>
    )
};

export default Clock;
