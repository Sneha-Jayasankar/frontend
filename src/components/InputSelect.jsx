const InputSelect=({
    label,
    options,
    className,
    name,
    value
})=>{
    return(
        <>
        <div>
         <label>{label}</label>
         <select name={label} className={className}>
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