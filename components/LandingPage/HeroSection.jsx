// import styles from '~/scss/LandingPage/HeroSection.module.scss';
import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
import heroImage from '~/public/imgs/LandingPage/hero/AnalyzeData.png';
import BackgrounElement from '~/public/imgs/LandingPage/hero/BackgroundElement.png'

export default function HeroSection() {
  return (
    <div className={`${styles.section} ${styles.blueBackground}`}>

      <div className={styles.sectionTwoText}>
        <h2>
          Get More Done with whitepace
        </h2>
        <p>
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
        <button className={styles.sectionTwoButton} >Try Whitepace free</button>
      </div>
      <div className={styles.sectionTwoImg}>
        <Image
          src={heroImage}
          alt='Analyze Data'
        />
      </div>
      <Image
        src={BackgrounElement}
        alt='Background Element'
        // fill
        className={styles.backgroundImg}
      />
    </div>
  )
}