export const TechnologyList = ({title, id, active, setSelected}) => {
  return (
    <li key={id} className={`${active ? `bg-white text-[#0B0D17]` : `bg-transparent`} cursor-pointer rounded-[50%] flex items-center justify-center w-10 h-10 border border-white/25 hover:border-white md:text-2xl md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]`} onClick={() => setSelected(title)}>{id}</li>
  )
}