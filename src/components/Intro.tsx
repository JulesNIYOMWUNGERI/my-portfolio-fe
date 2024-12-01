import { AtIcon, GitHubIcon, LinkedInIcon } from '../assets/images/images'
import { Button } from 'primereact/button'
import { Link as ScrollLink, Element } from 'react-scroll'

const Intro = () => {
  return (
    <Element name="intro">
      <div className='relative md:h-screen bg-[#D7D7D7] w-full overflow-hidden z-[-10]'>
          <div
            className="absolute right-[-10%] top-[-15%] w-[70vw] sm:w-[450px] md:w-[550px] lg:w-[830px] xlg:w-[900px] xxlg:w-[1100px] h-[200vh] sm:h-[200vh] md:h-[2000px] bg-[#000000] z-[-10]"
            style={{ transform: "rotate(15deg)" }}
          ></div>

          <div className='flex flex-col items-end w-full h-full z-50'>
            <div className='w-full h-full flex justify-around items-end'>
              <div className='hidden w-[49%] h-[85%] md:flex justify-center items-center pl-5 lg:pl-0'>
                <div className='flex flex-col items-start justify-center gap-[50px]'>
                  <h1 className='text-[20px] font-[600]'>Hi, I am</h1>
                  
                  <div className='flex flex-col'>
                    <h2 className='text-[40px] font-[700] leading-[45px]'>Jules NIYOMWUNGERI</h2>
                    <p className='text-[#909090] text-[14px] font-[500]'>Full-stack Developer / UI Designer</p>
                  </div>

                  <div className='flex justify-center items-center gap-5 mt-4'>
                    <div className='p-[10px] bg-[#C4C4C4] shadow-custom'>
                      <AtIcon theme="black" />
                    </div>
                    <div className='p-[10px] bg-[#C4C4C4] shadow-custom'>
                      <GitHubIcon theme="black" />
                    </div>
                    <div className='p-[10px] bg-[#C4C4C4] shadow-custom'>
                      <LinkedInIcon theme="black" />
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute h-[30vh] cl:h-[40vh] cs:h-[35vh] cxl:h-[38vh] cxs:h-[30vh] w-full overflow-hidden md:hidden flex items-end'>
                <div 
                  className='w-[120%] h-[110%] bg-[#000000ad] absolute bottom-[-120px] flex items-center'
                  style={{ transform: "rotate(-13deg)" }}
                >
                  <div 
                    className='flex items-start justify-between gap-[50px]  w-[82%] h-[110%] pl-10 pr-6 pt-5'  
                    style={{ transform: "rotate(13deg)" }}
                  >
                    <div className='flex flex-col mt-10 cxl:mt-16'>
                      <h1 className='text-[20px] font-[600] text-white'>Hi, I am</h1>
                      <h2 className='text-[20px] font-[700] leading-[30px] text-white'>Jules NIYOMWUNGERI</h2>
                      <p className='text-white text-[14px] font-[500]'>Full-stack Developer / UI Designer</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-8'>
                      <AtIcon theme="white" />
                      <GitHubIcon theme="white" />
                      <LinkedInIcon theme="white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:w-[49%] w-[100%] md:h-[85%] h-[570px] md:mt-0 mt-[100px]'>
                <div className="flex justify-center items-center h-[100%] lg:w-[70%] bg-cover md:bg-top bg-center bg-[url('../../src/assets/hero.svg')]"></div>
              </div>
            </div>

            <div className='w-full md:h-[200px] bg-[#3b3b3b] z-50 px-10 md:px-16 py-4'>
              <div className='w-full h-full flex flex-col justify-between md:items-start items-center py-2 md:gap-0 gap-4'>
                <h1 className='font-[600] text-[20px] text-[#FFFFFF] tracking-extra-wide'>IT BERRIES</h1>
                <p className='font-[400] text-[13px] text-[#ffffffa9] w-[80%] md:text-start text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat.
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <Button
                  className='font-[600] text-[13px] text-[#FFFFFF] border-x-2 border-x-[#FFFFFF] px-4 mt-2 tracking-wide'
                  label="READ MORE" 
                  icon="pi pi-check"
                />
              </div>
            </div>
          </div>

            
      </div>
    </Element>

  )
}

export default Intro