function ToastMsg({ closeToast, message}) {
    
    return (
        <div>
            <button onClick={closeToast}>{message}</button>
        </div>
    )
}

export default ToastMsg