
import styles from '../styles/button.module.css'
import { motion } from 'framer-motion'
const ButtonComponent = ({children, ...otherProps}) => {



    return(
        <motion.button 
        initial={{
            opacity:0,
            x:'-1rem'
          }}
          animate={{
            opacity:1,
            x:0,
          }}
          transition={{
            duration:1,
            type:"spring",
          }}
          whileHover={{
            backgroundColor: '#012d57',
            scale:.9,
          }}
         
        className={styles.button} {...otherProps}>
            {
                children
            }
        </motion.button>
    )
}

export default ButtonComponent