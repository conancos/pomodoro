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
                <input id="start_stop" type="checkbox" />
                <label 
                    /* id="start-stop" */
                    className="label-start-stop" 
                    htmlFor="start_stop"
                    onClick={handleStartStop}>{timerOn ? "STOP" : "START"}
                </label>
            </div> 
        </div>
    )
}

export default Panel;