
export const DestinationDescription = ({item}) => {
    return (
        <div key={item.id} className="w-[23rem] md:w-[36rem] ">
            <h1 className='uppercase text-white font-Bellefair text-[56px] md:text-[80px] mt-5'>{item.name}</h1>
            <p className="font-Barlow leading-[25px] lg:mt-[14px] lg:leading-8 text-[15px] md:text-base text-[#D0D6F9]">{item.description}</p>
            <hr className="border-[#383B4B] h-[1px] my-8 w-[327px] lg:mt-[54px] lg:w-full mx-auto" />
            <div className="grid md:grid-cols-2">
                {/* Distance */}
                <div className="uppercase mb-8">
                    <h3 className="font-Barlow-Condensed text-[14px] tracking-[2.36px] text-[#D0D6F9]">AVG. DISTANCE</h3>
                    <h1 className="text-white text-[28px] mt-3 font-Bellefair">{item.distance}</h1>
                </div>
                {/* Travel time */}
                <div className="uppercase mb-[3.625rem]">
                    <h3 className="font-Barlow-Condensed text-[14px] tracking-[2.36px] text-[#D0D6F9]">EST. TRAVEL TIME</h3>
                    <h1 className="text-white text-[28px] mt-3 font-Bellefair">{item.travel}</h1>
                </div>
            </div>
        </div>
    )
}
