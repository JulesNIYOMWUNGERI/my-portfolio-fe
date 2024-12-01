import { Button } from 'primereact/button'
import { Link as ScrollLink, Element } from 'react-scroll'
import { SeparatorIcon } from '../assets/images/images'
import InputField from './InputField'
import { useFormik } from 'formik'
import { NewMessageSchema } from '../utils/validations'

const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col space w-full pt-2',
  },
  inputlabel: {
    className:
      'text-[12px] leading-[18.12px] font-[500] font-manrope text-black ml-[1px]',
  },
  input: {
    className:
      'py-3 px-4 border-b-4 border-l-4 border-b-[#3b3b3b] border-l-[#3b3b3b] outline-none bg-transparent rounded-none border border-gray-300 placeholder:text-gray-600',
  },
};

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    },
    validationSchema: NewMessageSchema,
    onSubmit: async (values) => {
      console.log(values, '------------------')
    }
  })


  return (
    <Element name="contact">
      <div className='w-full bg-[#D7D7D7] md:px-[80px] py-8'>
        <div className="flex flex-col justify-center items-center gap-16 w-full h-full">
          <div className='flex'>
            <Button
              className='font-[800] text-[13px] text-[#000000] border-4 border-[#3b3b3b] px-8 py-[10px] tracking-wide'
              label="CONTACT" 
              icon="pi pi-check"
            />
          </div>

          <div className='flex justify-center items-center md:w-[60%] w-[80%]'>
            <p className='text-center'>
              Nulla in velit a metus rhoncus tempus. 
              Nulla congue nulla vel sem varius finibus. 
              Sed ornare sit amet lorem sed viverra. 
              In vel urna quis libero viverra facilisis ut ac est.
            </p>
          </div>

          <SeparatorIcon />

          <div className='flex flex-col justify-center items-center gap-1 md:w-[50%] w-[70%] mb-16'>
            <div className="w-full h-[80px] flex flex-col justify-start items-start">
              <InputField
                value={formik.values.name}
                placeholder="ENTER YOUR NAME *"
                required={false}
                type="text"
                name="name"
                className="text-xs"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...inputFieldStylingProps}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="w-full h-[80px] flex flex-col justify-start items-start">
              <InputField
                value={formik.values.email}
                placeholder="ENTER YOUR EMAIL *"
                required={false}
                type="email"
                name="email"
                className="text-xs"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...inputFieldStylingProps}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="w-full h-[80px] flex flex-col justify-start items-start">
              <InputField
                value={formik.values.phoneNumber}
                placeholder="PHONE NUMBER *"
                required={false}
                type="number"
                name="phoneNumber"
                className="text-xs"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...inputFieldStylingProps}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                  {formik.errors.phoneNumber}
                </p>
              ) : null}
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <textarea 
                value={formik.values.message}
                name='message'
                placeholder='YOUR MESSAGE *'
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full py-3 px-4 border-b-4 border-l-4 border-b-[#000000] border-l-[#000000] outline-none bg-transparent rounded-none border border-gray-300 text-[12px] placeholder:text-gray-600'
              />
              {formik.touched.message && formik.errors.message ? (
                <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                  {formik.errors.message}
                </p>
              ) : null}
            </div>

            <div className='flex mt-10'>
              <Button
                onClick={() => formik.handleSubmit()}
                className='font-[800] text-[13px] text-[#050505] border-x-4 border-x-[#050505] px-4 mt-2 tracking-wide'
                label="SUBMIT"
              />
            </div>
          </div>

        </div>
      </div>
    </Element>
  )
}

export default Contact