//import './styles/clock.css'

const ButtonsSession = ({ handleSessionDecrement, handleSessionIncrement}) => {

    return (
        <div className="buttons-session">
            <button 
                className="buttons-bottom"
                id="session-decrement" 
                onClick={handleSessionDecrement}
            >➖
            </button>
            <button 
                className="buttons-bottom"
                id="session-increment" 
                onClick={handleSessionIncrement}
            >➕
            </button>
        </div>
    )
}

export default ButtonsSession;