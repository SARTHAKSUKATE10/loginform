import "./formInput.css"

const FormInput = (props)=>{
    const {label,onChange,id,...inputprops} = props
    return(
        <div className="formInput">
        <label>{label}</label>
            <input {...inputprops} onChange={onChange}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput;