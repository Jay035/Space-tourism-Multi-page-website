import {useState, useEffect} from 'react';
import { crew1, crew2, crew3, crew4 } from '../data';
import { CrewMemberInfo } from './CrewMemberInfo';
import { CrewImage } from './CrewImage';
import { CrewCarousels } from './CrewCarousels';

export const Crew = () => {
  const [selected, setSelected] = useState("crew1");
  const [data, setData] = useState([]);
  const list = [
    {
      id: 1,
      title: "crew1"
    },
    {
      id: 2,
      title: "crew2"
    },
    {
      id: 3,
      title: "crew3"
    },
    {
      id: 4,
      title: "crew4"
    },
  ]

  useEffect(() => {
    switch(selected){
      case "crew1" : 
        setData(crew1);
        break;
      case "crew2" :
        setData(crew2);
        break;
      case "crew3" :
        setData(crew3);
        break;
      case "crew4" :
        setData(crew4);
        break;
        default:
        setData(crew1)
    }
}, [selected])

  return (
    <main data-aos="fade-in" data-aos-duration="2000" className='crew pt-[88px] transition-all font-Barlow-Condensed text-center bg-crew-bg-mobile md:bg-crew-bg-tablet lg:bg-crew-bg-desktop bg-no-repeat w-full bg-cover overflow-x-hidden h-screen md:pt-[8.5rem] md:px-10 lg:pt-[13.25rem] lg:text-left lg:pr-0 lg:px-14 xl:px-40'>
      <p className='tracking-[2.7px] text-white md:text-left lg:text-[1.75rem]'><span className='opacity-25 text-white mr-[18px]'>02</span> MEET YOUR CREW</p>
      <div className="grid w-full lg:grid-container md:items-end">
        <section className=" mx-auto mt-8 md:order-2 md:mt-10">
          {data.map(item => {
            return(
              <CrewImage 
                key={item.name}
                id={item.id}
                item={item}
              />
            )
          })}
          <hr className='border-[#383B4B] h-[1px] w-[327px] mx-auto lg:hidden' />
        </section>
        <section className='mt-8 md:order-1 md:flex md:flex-col-reverse lg:pb-[5.88rem]'>
          <ul className='uppercase text-sm tracking-[2.36px] flex justify-center items-center gap-[26px] my-8 lg:justify-start'>
          {
              list.map(item => {
                return(
                  <CrewCarousels 
                    key={item.id} 
                    active={selected === item.title} 
                    setSelected={setSelected} 
                    title={item.title}
                  />
                )
              })
            }
          </ul>
          {
            data.map(item => {
              return(
                <CrewMemberInfo 
                  key={item.name}
                  id={item.id}
                  item={item}
                />
              )
            })
          }
        </section>
      </div>
    </main>
  )
}
