import styles from '../styles/layout.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header';
import Footer from './footer';


const Layout = ({children})=>(
<div>   
    <Header/>
    <div className={styles.container}>
        <div className={styles.child_container}>
            {children}
        </div>
        <ToastContainer theme='colored' hideProgressBar autoClose={900} closeButton={false} position={'bottom-right'}/>
    </div>
    <Footer/>
</div>
)

export default Layout