import React from 'react'

export const Home = () => {
  return (
    // home page
    <main data-aos="fade-in" data-aos-duration="2000" className='relative z-0 pt-28 bg-no-repeat w-full bg-cover bg-center overflow-hidden bg-home-bg-mobile md:bg-home-bg-tablet lg:bg-home-bg-desktop gap-8 h-screen text-center lg:text-left tracking-wide '>
      <div className="grid lg:grid-container place-items-center md:items-end lg:pt-80 lg:px-14 lg:pb-24 ">
        {/* details */}
        <div className="px-6">
          <h1 className='uppercase font-Barlow-Condensed tracking-[2.7px] md:text-xl'>So, you want to travel to
          <span className='font-Bellefair block text-[5rem] md:text-[9.375rem] md:pb-4 my-4 md:my-6 leading-[100px] font-extralight text-white'>SPACE</span></h1>
          <p className='text-[15px] leading-6 w-full mx-auto max-w-[450px] md:text-base lg:mx-0'>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!</p>
        </div>
        {/* image */}
        <div className="">
          <a href='/' className='large-btn aspect-[1] text-xl text-[#0B0D17] relative z-10 inline-grid place-items-center w-[150px] tracking-[1.25px] md:w-60 md:text-[32px] md:tracking-[2px] bg-white rounded-full hover:after:scale-150'>EXPLORE</a>
        </div>
      </div>
    </main>
  )
}
