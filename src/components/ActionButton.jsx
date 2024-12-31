const ActionButtons = ({id, className, actionIncrement, actionDecrement, handleIncrement, handleDecrement, disabled}) => {

    return (
        <div className={id}>
            <button
                className={className}
                id={actionDecrement}
                onClick={handleDecrement}
                disabled={disabled}
            >➖
            </button>
            <button
                className={className}
                id={actionIncrement}
                onClick={handleIncrement}
                disabled={disabled}
            >➕
            </button>
        </div>
    )
}

export default ActionButtons;