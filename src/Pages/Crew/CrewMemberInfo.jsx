export const CrewMemberInfo = ({item, id}) => {
  return (
    <div key={id} className="md:mb-10 lg:mb-[120px]">
      <div className="uppercase text-white font-Bellefair">
        {/* crew member role */}
        <h2 className="text-base opacity-[0.4951] mb-2 md:text-2xl lg:text-[32px] lg:mb-[15px]">{item.role}</h2>
        <h1 className="text-2xl md:text-[40px] lg:text-[56px] lg:mb-[15px] lg:min-w-max">{item.name}</h1>
      </div>
      
      <article className="font-Barlow mt-4 leading-[25px] text-[15px] text-[#D0D6F9] w-[23rem] mx-auto md:leading-7 md:w-[28.6rem] md:text-base lg:mx-0 lg:mt-[27px]">{item.bio}</article>
    </div>
  )
}
