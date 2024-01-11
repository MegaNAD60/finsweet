function Input(props){
    return(
       <>
            <input className="w-full p-2"
             name={props.name}
             id={props.id}
             placeholder={props.placeholder}
            ></input>
       </>
    )
}

export default Input;