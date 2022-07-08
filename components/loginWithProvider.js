import styles from '../styles/button.module.css'
import { motion } from 'framer-motion'

const LoginWithProvider = ({provider,foregroundColor, backgroundColor,children,delay=0}) => {

    return(
        
        <motion.span
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
            delay: (1.1+delay),
          }}
          whileHover={{
            transition:{
                delay:0,
                duration:.5,
                 type:"spring",
                 
            },
            backgroundColor: '#ebebeb',
            
          }}
          
         
        className={styles.button}
        style={{
            backgroundColor: backgroundColor,
            color: foregroundColor,
        }}
        >
            {
                children
            }
            <strong style={{
                marginLeft: '.3rem',
                fontWeight: 900,
            }}>
                {provider}
            </strong>
        </motion.span>
    )
}

export default LoginWithProvider