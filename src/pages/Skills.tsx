import { Button } from "primereact/button";
import { BootstrapLogo, CLogo, CplusLogo, CssLogo, EnglandFlag, FigmaLogo, GitLogo, HtmlLogo, JavaScriptLogo, MongoDbLogo, MysqlLogo, NodeLogo, ReactLogo, SassLogo, SeparatorIcon, SpanishFlag, TypesciptLogo } from "../assets/images/images";


const Skills = () => {
  return (
    <div className='min-h-[88vh] w-full bg-[#D7D7D7] px-[80px] py-10'>
      <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
        <div className='flex'>
          <Button
            className='font-[600] text-[13px] text-[#3b3b3b] border-2 border-[#3b3b3b] px-8 py-[10px] tracking-wide'
            label="SKILLS" 
            icon="pi pi-check"
          />
        </div>

        <div className="flex flex-col justify-start w-[40%] gap-10">
          <div className="w-full flex flex-col gap-5">
            <h1 className='font-semibold font-urbanist text-[20px] text-[#000000] leading-normal tracking-wide'>USING NOW:</h1>
            <div className='flex flex-wrap justify-center items-center w-full gap-10'>
              <div className="flex flex-col justify-center items-center gap-2">
                <HtmlLogo />
                <span className="font-host">HTML5</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <CssLogo />
                <span className="font-host">CSS3</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <SassLogo />
                <span className="font-host">SASS</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <JavaScriptLogo />
                <span className="font-host">JAVASCRIPT</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <ReactLogo />
                <span className="font-host">REACT</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <BootstrapLogo />
                <span className="font-host">BOOTSTRAP</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <GitLogo />
                <span className="font-host">GIT</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <FigmaLogo />
                <span className="font-host">FIGMA</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">
            <h1 className='font-semibold font-urbanist text-[20px] text-[#000000] leading-normal tracking-wide'>LEARNING:</h1>
            <div className='flex flex-wrap justify-center items-center w-full gap-10'>
              <div className="flex flex-col justify-center items-center gap-2">
                <NodeLogo />
                <span className="font-host">NODEJS</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <MysqlLogo />
                <span className="font-host">MySQL</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <MongoDbLogo />
                <span className="font-host">MONGODB</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <TypesciptLogo />
                <span className="font-host">TYPESCRIPT</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">
            <h1 className='font-semibold font-urbanist text-[20px] text-[#000000] leading-normal tracking-wide'>OTHER SKILLS:</h1>
            <div className='flex flex-wrap justify-center items-center w-full gap-10'>
              <div className="flex flex-col justify-center items-center gap-2">
                <EnglandFlag />
                <span className="font-host">ANGIELSKI</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <SpanishFlag />
                <span className="font-host">HISZPAŃSKI</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <CplusLogo />
                <span className="font-host">C++</span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <CLogo />
                <span className="font-host">C</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Skills;
