function Button(props) {
    return (
        <>
            <button
                style={{
                padding: '9px 20px',
                marginLeft: `${props.marginLeft}`,
                borderRadius: '20px',
                border: `${props.border}`,
                color: `${props.color}`,
                backgroundColor: `${props.backgroundColor}`
                }} >
                {props.name}</button>
        </>
    )
}

export default Button;