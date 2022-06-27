import { useState, useEffect} from 'react';
import { terminology1, terminology2, terminology3 } from '../data';
import { TechnologyDetails } from './TechnologyDetails';
import { TechnologyImage } from './TechnologyImage';
import { TechnologyList } from './TechnologyList';

export const Technology = () => {
  const [selected, setSelected] = useState("LAUNCH VEHICLE");
  const [data, setData] = useState([]);
  const list = [
    {
      id: 1,
      title: "LAUNCH VEHICLE"
    },
    {
      id: 2,
      title: "SPACEPORT",
    },
    {
      id: 3,
      title: "SPACE CAPSULE",
    }
  ]

  useEffect(() => {
    switch(selected){
      case "LAUNCH VEHICLE" :
        setData(terminology1);
        break;
      case "SPACEPORT" :
        setData(terminology2);
        break;
      case "SPACE CAPSULE" :
        setData(terminology3);
        break;
        default:
        setData(terminology1)
    }
}, [selected])

  return (
    <main data-aos="fade-in" data-aos-duration="2000" className='pt-[88px] md:pt-[8.5rem] lg:pt-[13.25rem] transition-all font-Barlow-Condensed text-center bg-technology-bg-mobile md:bg-technology-bg-tablet lg:bg-technology-bg-desktop bg-no-repeat w-full bg-cover bg-center overflow-x-hidden h-screen lg:pl-[10.4rem]'>
      <p className='tracking-[2.7px] text-white md:text-xl md:tracking-[3.38px] md:text-left md:pl-[2.4rem] lg:pl-0'><span className='opacity-25 text-white mr-[18px]'>03</span> SPACE LAUNCH 101</p>
      <div className="grid xl:grid-container place-items-center md:items-center pb-10 lg:mt-[1.625rem]">
        <section className="mt-8 md:mt-[60px] lg:order-2 lg:flex lg:justify-self-end">
          {
            data.map(img => {
              return(
                <TechnologyImage
                  id={img.id}
                  img={img}
                />
              )
            })
          }
        </section>
        <section className='mt-[34px] md:mt-[56px] lg:order-1 lg:flex lg:flex-row lg:justify-start lg:text-left lg:gap-20'>
          <ul className='flex justify-center items-center gap-4 lg:flex-col'>
            {
              list.map( item => {
                return(
                  <TechnologyList 
                    id={item.id} 
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
                <TechnologyDetails
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
