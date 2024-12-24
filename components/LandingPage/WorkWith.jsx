import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
import BackgrounElement from '~/public/imgs/LandingPage/workWith/Element.png'
import Apps from '~/public/imgs/LandingPage/workWith/Apps.png'

export default function WorkWith() {
  return (
    <div className={`${styles.section} ${styles.blueBackground}`}>
      <Image
          src={BackgrounElement}
          alt='Background Element'
          className={styles.backgroundImg}
      />
      <div className={styles.sectionTwoImg}>
        <Image
          src={Apps}
          alt='Analyze Data'
        />
      </div>
      <div className={styles.sectionTwoText}>
        <h2>
          Work with Your Favorite Apps Using whitepace
        </h2>
        <p>
          Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
        </p>
        <button className={styles.sectionTwoButton} >
          Read More
          </button>
      </div>

    </div>
  )
}