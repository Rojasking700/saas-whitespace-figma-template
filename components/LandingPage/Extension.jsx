import stylesExtension from '~/scss/LandingPage/Extension.module.scss';
import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
import ContentMediaFolder from '~/public/imgs/LandingPage/extension/ContentMediaFolder.png'
import ContentMediaFolder2 from '~/public/imgs/LandingPage/extension/ContentMediaFolder2.png'

export default function Extension() {
  return (
    <div className={`${styles.section} ${styles.blueBackground}`}>

      <div className={styles.sectionTwoText}>
        <h2>
          Project Management
        </h2>
        <p>
          Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
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