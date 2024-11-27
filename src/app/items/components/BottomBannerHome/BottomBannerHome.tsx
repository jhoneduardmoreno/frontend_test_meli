import Image from 'next/image'
import styles from './BottomBannerHome.module.scss'

const BottomBannerHome = () => {
    return (
        <section className={styles.bottomBanner}>
            <Image src="/assets/bottom_banner.png" alt="Banner de ofertas" fill sizes="100%" className={styles.image} />
        </section>
    )
}

export default BottomBannerHome;