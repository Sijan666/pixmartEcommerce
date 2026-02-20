

const Button = ({btnText , className}) => {
    return (
        <button className={`cursor-pointer duration-500 bg-[#0F73F6] text-white hover:bg-white hover:text-[#0F73F6] font-bold rounded-[10px] border border-[#0F73F6] ${className}`}>{btnText}</button>
    )
}

export default Button