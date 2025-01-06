const ActionButtons = ({id, className, actionIncrement, actionDecrement, handleIncrement, handleDecrement}) => {

    return (
        <div className={id}>
            <button
                className={className}
                id={actionDecrement}
                onClick={handleDecrement}
            >➖
            </button>
            <button
                className={className}
                id={actionIncrement}
                onClick={handleIncrement}
            >➕
            </button>
        </div>
    )
}

export default ActionButtons;