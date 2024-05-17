import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants/navLinks'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { textVariant} from "../utils/motion"

const Tech = () => {
  const isAndroid = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        return true;
    } else {
      return false;
    }
  }
  const isMobile = (mobile) => {
    if (mobile) {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <p className={styles.sectionSubText}>What I'm capable to work with</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
        {isAndroid() ? <p className='mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Here's a preview of the technologies I've worked with. <br/>
          You can find more of them, visiting this portfolio on desktop or iOS.
        </p> : null}
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((tech) => (
          isAndroid() ? (isMobile(tech.mobile) ? <div className='w-28 h-28' key={tech.name}>
          <BallCanvas icon={tech.icon} color={tech.color} />
          </div> : null) : <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} color={tech.color} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")