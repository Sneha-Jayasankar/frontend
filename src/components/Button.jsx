const Button=(props)=>{
    const {label,handleClick,id,className,value}=props;
    return(
    <button id={id} className={className} onClick={(e)=>handleClick(e)} value={value}>{label}</button>
    );
}
export default Button;