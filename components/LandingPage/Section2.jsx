
import Image from 'next/image'
import styles from '~/scss/LandingPage/SectionTwo.module.scss'

export default function Section2() {
  return (
    <div className={styles.Section2}>
      <div className={styles.heroText}>
        <h2>
          Project Management
        </h2>
        <p>
          Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
        </p>
        <button className={styles.heroButton} >Try Whitepace free</button>
      </div>
      <div className={styles.heroImg}>
        <Image
          src={'/imgs/LandingPage/Section2/CodingAWebsite.png'}
          alt='Analyze Data'
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}