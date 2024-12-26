//import './styles/panel.css'

const Panel = () => {
    return (
        <div className="panel">
            <button id="reset" className="button-reset">RESET</button>
            <div className="start-stop">
                <input id="start_stop" type="checkbox" />
                <label className="label-start-stop" htmlFor="start_stop">START/STOP</label>
            </div> 
        </div>
    )
}

export default Panel;