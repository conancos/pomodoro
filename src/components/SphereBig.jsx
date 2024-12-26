//import './styles/clock.css'

const SphereBig = () => {

    return (
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
    )
}

export default SphereBig;