const InputSelect=({
    label,
    options,
    className,
    id,
    onChange,
    handleClick = () => null
})=>{
    return(
        <>
        <div>
         <label>{label}</label>
         <select name={label} className={className} id={id} onClick={(event) =>onChange(event.target.value)}>
            {options.map((item)=>(
                <option key={item.key} value={item.value}>
                {item.name}</option>
            ))}
         </select>
         
         </div>
        </>
    );
};
export default InputSelect;