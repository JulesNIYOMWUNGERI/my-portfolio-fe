import { Logo } from '../assets/images/images';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';

const navItems = [
    { label: 'About me', name: 'about' },
    { label: 'Skills', name: 'skills' },
    { label: 'Portfolio', name: 'project' },
    { label: 'Contact me', name: 'contact' },
];
  

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const [bgColor, setBgColor] = useState('bg-transparent');
    const [navHeight, setNavHeight] = useState('h-[100px]');
    const [logoSize, setLogoSize] = useState({ width: '60', height: '50' });
    const [logoTheme, setLogoTheme] = useState('black');
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    function handleHamburgerBtn() {
      setHamburgerOpen(!hamburgerOpen)
    }
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor('bg-[#3b3b3b]');
        setNavHeight('h-[12vh]');
        setLogoSize({ width: '40', height: '40' });
        setLogoTheme('white');
      } else {
        setBgColor('bg-transparent');
        setNavHeight('h-[100px]');
        setLogoSize({ width: '60', height: '50' });
        setLogoTheme('black');
      }

    //   activeMenu()
    };

    
    // const activeMenu = () => {
        
    //     const sectionWithoutHash = window?.location.hash.replace(/^#/, '');
    
    //     console.log(sectionWithoutHash, '==================')
    
    //     setActiveSection(sectionWithoutHash);
    // };






    
    /** the commented codes is for enabling the auto hightliting the active section */



    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={`${bgColor} fixed w-full z-50`}>
        <div className={`${navHeight} w-full flex justify-between items-center md:px-[110px] px-[20px]`}>
          <div className="cursor-pointer">
            <ScrollLink to="intro" smooth={true} duration={500} hashSpy={true}  onClick={() => setActiveSection('intro')}>
              <Logo
                theme={logoTheme}
                width={logoSize.width}
                height={logoSize.height}
              />
            </ScrollLink>
          </div>

          <div className='md:hidden'>
            <div onClick={handleHamburgerBtn}>
              <div className={`h-1 w-10 bg-[#ffffff] ${hamburgerOpen ? 'absolute rotate-45 transition duration-150 ease-in-out' : 'transition duration-150 ease-in-out'}`}></div>
              <div className={`h-1 w-10 bg-[#ffffff] mt-2 ${hamburgerOpen ? 'hidden' : ''}`}></div>
              <div className={`h-1 w-10 bg-[#ffffff] mt-2 ${hamburgerOpen ? '-mt-[0.2rem] -rotate-45 transition duration-150 ease-in-out' : 'transition duration-150 ease-in-out'}`}></div>
            </div>

            <div className={`flex flex-col absolute bg-[#3b3b3b] text-2xl drop-shadow left-0 w-full mt-[34px] z-20 ${hamburgerOpen ? '': 'hidden'}`}>
              {navItems.map((item, index) => (
                <ScrollLink
                  key={index}
                  to={item.name}
                  smooth={true}
                  duration={500}
                  hashSpy={true}
                  onClick={() => {
                    setActiveSection(item.name);
                    setHamburgerOpen(false)
                  }}
                >
                  <div
                    className={`${
                      activeSection === item.name
                        ? 'bg-[#f7f6f6] text-[#000000] font-[600]'
                        : 'font-[500] text-[#FFFFFF] bg-transparent'
                    } cursor-pointer px-3 py-[8px]`}
                  >
                    <span className="text-[16px]">{item.label}</span>
                  </div>
                </ScrollLink>
              ))}
            </div>
          </div>
  
          <div className="hidden md:flex justify-center items-center gap-4">
            {navItems.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.name}
                smooth={true}
                duration={500}
                hashSpy={true}
                onClick={() => setActiveSection(item.name)}
              >
                <div
                  className={`${
                    activeSection === item.name
                      ? 'bg-[#D7D7D7] text-[#000000] font-[600]'
                      : 'font-[500] text-[#FFFFFF] bg-transparent'
                  } cursor-pointer px-3 py-[2px] rounded-[20px]`}
                >
                  <span className="text-[16px]">{item.label}</span>
                </div>
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    );
};
  
export default Navbar;
  
