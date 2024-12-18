import './styles/clock.css'

const Clock = () => {
    
    
    return (
        <div className="clock">
        
            <div className="buttons-break">
            <button id="break-decrement" className="buttons-top">➖</button>
            <button id="break-increment" className="buttons-top">➕</button>
            </div>

            <div className="counters">
                <div>
                <h2 id="break-label">TIME BREAK</h2>
                <p id="break-length">5</p>
                </div>
                
                <div>
                <h2 id="session-label">SESSION</h2>
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