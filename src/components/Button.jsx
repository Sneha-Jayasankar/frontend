const Button=(props)=>{
    const {label,handleClick,id,className,value}=props;
    return(
    <button id={id} className={className} onClick={()=>handleClick()} value={value}>{label}</button>
    );
}
export default Button;