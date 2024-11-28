import stylesExtension from '~/scss/LandingPage/Extension.module.scss';
import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
import ContentMediaFolder from '~/public/imgs/LandingPage/workWith/Element.png'
import Apps from '~/public/imgs/LandingPage/WorkWith/Apps.png'

export default function WorkWith() {
  return (
    <div className={`${styles.section} ${styles.blueBackground}`}>
      <Image
          src={ContentMediaFolder}
          alt='Background Element'
          className={styles.backgroundImg}
      />
      <div className={styles.sectionTwoImg}>
        <Image
          src={Apps}
          alt='Analyze Data'
          // width={500}
          // height={500}
        />
      </div>
      <div className={styles.sectionTwoText}>
        <h1>
          Work with Your Favorite Apps Using whitepace
        </h1>
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