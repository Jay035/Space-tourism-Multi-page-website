import React, { useState, useEffect } from 'react';
import { DestinationDescription } from './DestinationDescription';
import { DestinationList } from './DestinationList';
import { moon, mars, europa, titan } from '../data';
import { DestinationImage } from './DestinationImage';

export const Destination = () => {
  const [selected, setSelected] = useState("moon");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "moon",
      title: "Moon"
    },
    {
      id: "mars",
      title: "Mars"
    },
    {
      id: "europa",
      title: "Europa"
    },
    {
      id: "titan",
      title: "Titan"
    },
  ]

  useEffect(() => {
    switch(selected){
      case "moon" : 
        setData(moon);
        break;
      case "mars" :
        setData(mars);
        break;
      case "europa" :
        setData(europa);
        break;
      case "titan" :
        setData(titan);
        break;
        default:
        setData(moon)
    }
}, [selected])

  return (
    <main data-aos="fade-in" data-aos-duration="2000" className='relative pt-[5.5rem] md:pt-[8.5rem] md:px-10 lg:pt-[13.25rem] font-Barlow-Condensed text-center bg-destination-bg-mobile md:bg-destination-bg-tablet lg:bg-destination-bg-desktop bg-no-repeat w-full bg-cover bg-center overflow-x-hidden h-screen xl:text-left tracking-wide gap-8 xl:pl-[10.4rem]'>
      <p className='tracking-[2.7px] text-white md:text-left lg:text-[1.75rem]'><span className='opacity-25 text-white mr-[18px]'>01</span> PICK YOUR DESTINATION</p>
      <div className="grid xl:grid-container place-items-center lg:pt-12 lg:pb-32 md:items-end xl:w-[65.4375rem]">
        {/* Destination image */}
        <div className="w-[170px] md:w-[300px] mx-auto mt-8 md:mt-[60px] lg:mt-[27px] lg:w-[27.8rem]">
          {data.map(item => {
            return(
              <DestinationImage 
                id={item.images.png}
                item={item}
              />
            )
          })}
        </div>
        <div className=''>
          <ul className='uppercase text-sm md:text-base tracking-[2.36px] flex justify-center items-center xl:justify-start gap-[26px] mt-[26px] md:mt-[53px] mb-5'>
            {
              list.map(item => {
                return(
                  <DestinationList 
                    key={item.title}
                    id={item.id} 
                    active={selected === item.id} 
                    setSelected={setSelected} 
                    title={item.title}
                  />
                )
              })
            }
          </ul>
          {data.map(item => {
            return(
              <DestinationDescription
                key={item.id}
                id={item.id}
                item={item}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}
