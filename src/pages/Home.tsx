import { AtIcon, GitHubIcon, LinkedInIcon } from '../../src/assets/images/images'
import { Button } from 'primereact/button'
import { About, Contact, Footer, Intro, Projects, Skills } from '../components';

const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <Intro />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  )
}

export default Home;
