import stylesExtension from '~/scss/LandingPage/Extension.module.scss';
import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
import ContentMediaFolder2 from '~/public/imgs/LandingPage/extension/ContentMediaFolder2.png'

export default function Extension() {
  return (
    <div className={`${styles.section} ${styles.blueBackground}`}>

      <div className={styles.sectionTwoText}>
        <h2>
        Use as Extension
        </h2>
        <p>
        Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
        </p>
        <button className={styles.sectionTwoButton} >
          Get Started
          </button>
      </div>
      <div className={styles.sectionTwoImg}>
        <Image
          src={ContentMediaFolder2}
          alt='Analyze Data'
        />
      </div>
    </div>
  )
}