export const CrewCarousels = ({id, title, active, setSelected}) => {
  return (
    <li className={`${active ? `opacity-100` : `opacity-[0.17]` } cursor-pointer w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] hover:opacity-50 bg-white rounded-full mix-blend-normal`} onClick={() => setSelected(title)}></li>
  )
}
