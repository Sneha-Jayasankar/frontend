const InputField=({
    label,
    id,
    placeholder,
    type,
    name,
    value
})=>{
    return(
        <div>
            <label>{label}</label>
            <input type={type} id={id} value={value} placeholder={placeholder} name={name} />
        </div>
    );
};
export default InputField;