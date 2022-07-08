import styles from '../styles/input.module.css'
import { motion } from 'framer-motion'

const InputComponent = ({type,placeholder, delay,children,label,...otherComponent}) => {


    return(
    <motion.div
    className={styles.container}
    initial={{
        scaleX:0,
        opacity:0,
        
    }}
    animate={{
       scaleX:1,
       opacity:1,
       transformOrigin:'left',
       boxShadow: '2px 6px 136px  -200px transparent',
    }}
    transition={{
        
        delay:delay,
        duration:.5,
       
    }}
   
    whileHover={{
        scale:1.2,
        boxShadow: '0px 0px 136px -20px rgba(60,139,232,0.75)',
        
    }}
    // layoutId={'input'}
    
    >
        <label className={styles.label}>{label}</label><br/>
        {
            children
        }
    
        <motion.input 
        
       
        type={type} className={styles.input} placeholder={placeholder} {...otherComponent}/>
    
    </motion.div>
    )
}

export default InputComponent