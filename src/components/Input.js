function Input(props){
    return(
       <>
            <input
             name={props.name}
             id={props.id}
             placeholder={props.placeholder}
             style={{
                padding: '10px',
                width: '100%'
             }}
            ></input>
       </>
    )
}

export default Input;