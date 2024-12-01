import { Button } from 'primereact/button'
import { SeparatorIcon } from '../assets/images/images';
import { Link as ScrollLink, Element } from 'react-scroll'

const About = () => {
  return (
    <Element name="about">
      <div className='min-h-[88vh] w-full bg-[#D7D7D7] px-[30px] md:px-[80px] py-[40px]'>
        <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
          <div className='flex'>
            <Button
              className='font-[800] text-[13px] text-[#000000] border-4 border-[#3b3b3b] px-8 py-[10px] tracking-wide'
              label="ABOUT ME" 
              icon="pi pi-check"
            />
          </div>

          <div className='flex justify-center items-center md:w-[60%] md:px-0 px-8'>
            <p className='text-center'>
              Nulla in velit a metus rhoncus tempus. 
              Nulla congue nulla vel sem varius finibus. 
              Sed ornare sit amet lorem sed viverra. 
              In vel urna quis libero viverra facilisis ut ac est.
            </p>
          </div>

          <div className='flex'>
            <Button
              className='font-[800] text-[13px] text-[#050505] border-x-4 border-x-[#050505] px-4 mt-2 tracking-wide'
              label="EXPLORE" 
              icon="pi pi-check"
            />
          </div>

          <SeparatorIcon />

          <div className='flex md:flex-row flex-col flex-wrap justify-center items-center gap-10'>
            <div className='flex flex-col gap-2 md:w-[40%] md:px-0 px-8'>
              <h1 className='font-semibold font-urbanist text-[20px] text-[#000000] leading-normal tracking-wide'>DESIGN</h1>
              <p className='text-[14px] font-light leading-normal text-[#000000] font-urbanist'>
                I can design the site based on your needs and suggestions. 
                I can also design the site from scratch and consult you during the job.
              </p>
            </div>
            <div className='flex flex-col gap-2 md:w-[40%] md:px-0 px-8'>
              <h1 className='font-semibold font-urbanist text-[20px] text-[#000000] leading-normal tracking-wide'>DEVELOPMENT</h1>
              <p className='text-[14px] font-light leading-normal text-[#000000] font-urbanist'>
                I can design the site based on your needs and suggestions. 
                I can also design the site from scratch and consult you during the job.
              </p>
            </div>
            <div className='flex flex-col gap-2 md:w-[40%] md:px-0 px-8'>
              <h1 className='font-semibold font-urbanist text-[20px] text-[#000000] leading-normal tracking-wide'>MAINTENANCE</h1>
              <p className='text-[14px] font-light leading-normal text-[#000000]'>
                I can design the site based on your needs and suggestions. 
                I can also design the site from scratch and consult you during the job.
              </p>
            </div>
          </div>

          <SeparatorIcon />

        </div>
      </div>
    </Element>
  )
}

export default About;
