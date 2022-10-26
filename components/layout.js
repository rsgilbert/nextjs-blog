import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }) {

    return (
        <div className={styles.container}>
            <Image
                priority
                src='/images/iphone13.jpeg'
                className={utilStyles.borderCircle}
                height={134}
                width={134}
                />
            <h1 className={utilStyles.heading2Xl}>Hello Nextjs Blog</h1>
            {children}
        </div>
    )
}