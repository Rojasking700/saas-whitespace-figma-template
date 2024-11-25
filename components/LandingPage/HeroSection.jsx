import styles from '~/scss/LandingPage/HeroSection.module.scss';
import Image from 'next/image';
import heroImage from '~/public/imgs/LandingPage/hero/AnalyzeData.png';

export default function HeroSection() {
  return (
    <div className={styles.HeroSection}>
      <div className={styles.heroText}>
        <h2>
          Get More Done with whitepace
        </h2>
        <p>
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
        <button className={styles.heroButton} >Try Whitepace free</button>
      </div>
      <div className={styles.heroImg}>
        <Image
          // placeholder='blur'
          // src={'/imgs/LandingPage/hero/AnalyzeData.png'}
          src={heroImage}
          alt='Analyze Data'
          // width={600}
          // height={600}
        />
      </div>
    </div>
  )
}