import { Button } from 'primereact/button'
import { ArrowUp, Email, Facebook, Instagram, LinkedIn } from '../assets/images/images'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
  return (
    <div className='w-full h- flex justify-center items-center bg-[#1A1A1A] text-white p-8'>
        <div className='w-full flex flex-col justify-center items-center gap-4'>
            <ScrollLink to="intro" smooth={true} duration={500} hashSpy={true}>
              <div className='flex flex-col justify-center items-center cursor-pointer'>
                <ArrowUp />
                <Button
                  // onClick={() => formik.handleSubmit()}
                  className='font-[600] text-[11px] text-[#ffffffb2] px-4 mt-2 tracking-wide'
                  label="BACK TO TOP"
                />
              </div>
            </ScrollLink>

            <div className='flex justify-center items-center gap-4'>
                <Facebook />
                <LinkedIn />
                <Instagram />
                <Email />
            </div>

            <div className='flex justify-center items-center'>
                <h1 className='text-[13px] font-[400] text-[#ffffffb2] font-host'>@2024 Jules NIYOMWUNGERI All Rights Reserved.</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer