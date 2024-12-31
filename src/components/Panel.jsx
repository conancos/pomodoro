//import './styles/panel.css'

const Panel = ({ handleStartStop, handleReset, timerOn }) => {
    return (
        <div className="panel">
            <button 
                id="reset" 
                className="button-reset"
                onClick={handleReset}>RESET
            </button>
            <div className="start-stop">
                <input id="input-start_stop" type="checkbox" />
                <label 
                    id="start_stop"
                    className="label-start-stop" 
                    htmlFor="input-start_stop"
                    onClick={handleStartStop}>{timerOn ? "STOP" : "START"}
                </label>
            </div> 
        </div>
    )
}

export default Panel;

/* const Panel = ({ handleStartStop, handleReset, timerOn }) => {
    return (
        <div className="panel">
            <button 
                id="reset" 
                className="button-reset"
                onClick={handleReset}>RESET
            </button>
            <button 
                id="start_stop" 
                className="button-start-stop"
                onClick={handleStartStop}
            >
                {timerOn ? "STOP" : "START"}
            </button>
        </div>
    )
}

export default Panel; */
