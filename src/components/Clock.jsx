import './styles/clock.css'

const Clock = () => {
    
    
    return (
        <div className="clock">
        
            <div className="buttons-break">
                <button id="break-decrement" className="buttons-top">➖</button>
                <button id="break-increment" className="buttons-top">➕</button>
            </div>

            
            <div className="sphere-big">

                <div className="break">
                    <p id="break-length">5</p>
                    <p id="break-label">TIME BREAK</p>
                </div>

                <div className="timer">
                    <p id="timer-label">SESSION</p>
                    <p id="time-left">25:00</p>
                </div>

                <div className="session">
                    <p id="session-label">TIME POMODORO</p>
                    <p id="session-length">25</p>
                </div>
            </div>
            
            <div className="buttons-session">
                <button id="session-decrement" className="buttons-bottom">➖</button>
                <button id="session-increment" className="buttons-bottom">➕</button>
            </div>
      
        </div>
    )
}

export default Clock