import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

import { styles } from '../styles';
import { pdf, youtube } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/navLinks";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, year, description, tags, image, source_code_link, second_src_link }) => {
  
  const checkLink = (source_code_link) => {
    if(source_code_link === "" || source_code_link === undefined) {
      return false
    } else return true;
  }

  const checkSecondLink = (second_src_link) => {
    if(second_src_link === "" || second_src_link === undefined) {
      return false
    } else return true;
  }

  return(
    <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    initial="show"
    /* whileInView={"show"} */
    >
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className='relative w-full h-[180px]'>
          <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {checkLink(source_code_link) ?
            <div 
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={pdf} alt="pdf" className='w-1/2 h-1/2 object-contain'/>
            </div> : null}
            {checkSecondLink(second_src_link) ?
            <div 
            onClick={() => window.open(second_src_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={youtube} alt="video" className='w-1/2 h-1/2 object-contain'/>
            </div> : null}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <p className='text-white mt-2 text-[16px]'>{year}</p>
          <p className='text-secondary mt-2 text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView={"show"}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView={"show"}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Here are a few of the projects I've worked on throughout my academic and professional career.<br/>
          Each project is briefly described, to better explain the purpose and the technologies used on it.<br/>
          This section of the website is constantly updated with new projects, which represent my growth
          as a game designer, developer and tech director as well as my ability to work within different fields of
          application.<br/>
          All of the PDFs (italian only) and videos linked to the projects are available for download or visualization,
           so you can check them out in detail!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works");