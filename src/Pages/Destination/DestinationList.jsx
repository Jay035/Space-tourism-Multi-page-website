export const DestinationList = ({id, title, active, setSelected}) => {
    return (
        <li className={` ${active ? ` after:bg-white text-white` : `text-[#D0D6F9] after:bg-transparent`} cursor-pointer after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:h-[3px] after:w-12 md:after:w-14 relative hover:after:bg-white/50`} onClick={() => setSelected(id)}>{title}</li>
    )
}
