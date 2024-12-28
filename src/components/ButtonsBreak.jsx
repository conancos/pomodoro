//import './styles/clock.css'

const ButtonsBreak = ({ handleBreakDecrement, handleBreakIncrement }) => {
    
    return (
        <div className='buttons-break'>
            <button 
                className='buttons-top' 
                id='break-decrement'
                onClick={handleBreakDecrement}
            >➖
            </button>
            <button 
                className='buttons-top' 
                id='break-increment'
                onClick={handleBreakIncrement}
            >➕
            </button>
        </div>
    )
}

export default ButtonsBreak;