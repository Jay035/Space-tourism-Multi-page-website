export const TechnologyDetails = ({id, item}) => {
  return (
    <div key={id} className="mt-[26px] md:pb-24 lg:pb-0 lg:mt-0">
      <div className="uppercase text-white">
        <h2 className="text-base font-Bellefair opacity-[0.4951] mb-2 lg:mb-3"> THE Terminology...</h2>
        <h1 className="text-2xl font-Bellefair md:text-[2.5rem] lg:text-[3.5rem] lg:mt-4 lg:min-w-max">{item.name}</h1>
      </div>
      
      <article className="font-Barlow mt-4 leading-[25px] text-[15px] text-[#D0D6F9] w-[23rem] mx-auto md:text-base md:leading-7 md:w-[28.6rem] lg:w-full lg:text-lg lg:mt-[1.06rem]">{item.description}</article>
    </div>
  )
}
