const InputField=({
    label,
    id,
    placeholder,
    type,
    name,
    value,
    onChange
})=>{
    return(
        <div>
            <label>{label}</label>
            <input type={type} id={id} value={value} placeholder={placeholder} name={name} onChange={(event) =>onChange(event.target.value)} />
        </div>
    );
};
export default InputField;