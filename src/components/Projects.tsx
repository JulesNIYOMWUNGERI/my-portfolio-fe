import { Link as ScrollLink, Element } from 'react-scroll'
import image from '../../src/assets/project-bg.svg'
import { Button } from 'primereact/button';
import { useState } from 'react';

const projects = [
  {
    work: 'coded, designed',
    name: 'eatsome',
    description: 'Restaurant vrowsing in React.js (Using Yelp API)'
  },
    {
    work: 'coded',
    name: 'eatsome',
    description: 'Restaurant vrowsing in React.js (Using Yelp API)'
  },
    {
    work: 'designed',
    name: 'eatsome',
    description: 'Restaurant vrowsing in React.js (Using Yelp API)'
  },
    {
    work: 'coded, designed',
    name: 'eatsome',
    description: 'Restaurant vrowsing in React.js (Using Yelp API)'
  },
    {
    work: 'coded, frontend',
    name: 'eatsome',
    description: 'Restaurant vrowsing in React.js (Using Yelp API)'
  },
    {
    work: 'coded, backend',
    name: 'eatsome',
    description: 'Restaurant vrowsing in React.js (Using Yelp API)'
  },
    {
    work: 'coded, fullstack',
    name: 'eatsome',
    description: 'Restaurant vrowsing in React.js (Using Yelp API)'
  },
]

const Projects = () => {
  const defaultSection = 'ALL'
  const [currentSection, setCurrentSection] = useState(defaultSection);

  return (
    <Element name="project">
      <div className='min-h-[100vh] w-full bg-[#D7D7D7]'>
        <div className='w-full h-[40vh]'>
          <div className="flex justify-center items-center h-[100%] w-[100%] bg-cover bg-end bg-[url('../../src/assets/project-bg.svg')]">
            <div className='flex'>
              <Button
                className='font-extrabold text-[14px] text-[#000000] border-4 border-[#000000] px-8 py-[10px] tracking-wide'
                label="PORTFOLIO"
              />
            </div>
          </div>
        </div>

        <div className='w-full bg-[#3b3b3b] flex flex-col justify-start items-center'>
          <div className='w-full flex justify-center items-center h-[60px]'>
            {['ALL', 'CODED', 'DESIGNED']?.map((item, index) => (
              <div onClick={() => setCurrentSection(item)} key={index} className='cursor-pointer'>
                <h1 className={`${currentSection === item ? 'border-b-2' : 'border-b'} text-white text-[13px]  px-8 py-1 tracking-wide`}>{item}</h1>
              </div>
            ))}
          </div>

          <div className='w-full flex flex-col md:flex-row flex-wrap px-2 py-6 gap-1 justify-center items-center'>
            {projects?.map((item: { work: string, name: string, description: string }) => (
              <div className="relative w-full md:w-[24.7%] h-[38vh] border border-[#ffffff2d] group overflow-hidden flex justify-center items-end bg-cover bg-end bg-[url('../../src/assets/project-bg.svg')]">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-700 flex items-center justify-center absolute inset-0 bg-[#000000] bg-opacity-30 text-white text-lg">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <span className="text-[10px] font-semibold font-urbanist">{item?.work}</span>
                    <h1 className="text-[25px] font-bold font-urbanist">{item?.name}</h1>
                    <p className="text-[500] text-[13px] font-urbanist text-center">{item?.description}</p>
                    <div className="flex justify-center items-center gap-4">
                      <Button
                        className="font-[600] text-[13px] text-[#ffffff] border-x-2 border-x-[#ffffff] px-4 mt-2 tracking-wide"
                        label="DEMO"
                      />
                      <Button
                        className="font-[600] text-[13px] text-[#ffffff] border-x-2 border-x-[#ffffff] px-4 mt-2 tracking-wide"
                        label="MORE"
                      />
                    </div>
                  </div>
                </div>
                <p className='text-white text-[12px] text-center font-host'>created by jules</p>
              </div>            
            ))}
          </div>

          <div className='flex w-full justify-center items-center mb-8'>
            <h1 className='text-white text-[14px] font-urbanist tracking-wide font-[500]'>And many more to come!</h1>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Projects;
