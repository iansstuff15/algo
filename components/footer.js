import styles   from '../styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {

    return(
        <footer className={styles.container}>
            <div 
            style={{
                gridColumn:`1/span 2`,   
            }}
            >
           
            <h1>BigO</h1>
            
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore.
            </p>
            </div>
           
            <div>
                <h3>Navigation</h3>
                <h6>Parallel Quick Sorts</h6>
               
            </div>
            <div>
                <h3>Developed by</h3>
                <h6>Powell, Diriangen Lempira D.</h6>
                <h6>Rosario, Kenneth Edison</h6>
                
            </div>
            <div>
                <h3>Developed in</h3>
                <Link href={'https://www.tip.edu.ph/'} passHref>
                    <a target={'_blank'}>
                     <h6>Technological Institute of the Philippines</h6>
                    </a>
                </Link>
                <Link href={'https://goo.gl/maps/KpguyMd2BoSrzYFv9'} passHref>
                    <a target={'_blank'}>
                     <h6>938 Aurora Blvd, Cubao, Quezon City, 1109 Metro Manila</h6>
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer