import ButtonsBreak from './ButtonsBreak'
import SphereBig from './SphereBig'
import ButtonsSession from './ButtonsSession'
import Panel from './Panel'

import './styles/clock.css'


const Clock = () => {
    
    return (
        <div className="clock">
            <ButtonsBreak />
            <SphereBig />
            <ButtonsSession />
            <Panel />
        </div>
    )
}

export default Clock