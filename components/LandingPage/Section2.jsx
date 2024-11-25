import styles from '~/scss/LandingPage/SectionTwo.module.scss'
import Image from 'next/image'

export default function Section2() {
  return (
    <div className={styles.sectionTwo}>

      <div className={styles.sectionTwoText}>
        <Image
          className={styles.groupImg}
          src={'/imgs/LandingPage/Section2/Group.png'}
          alt='Analyze Data'
          width={500}
          height={500}
        />
        <h2>
          Project Management
        </h2>
        <p>
          Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
        </p>
        <button className={styles.sectionTwoButton} >Get Started</button>
      </div>
      <div className={styles.sectionTwoImg}>
        <Image
          src={'/imgs/LandingPage/Section2/CodingAWebsite.png'}
          alt='Analyze Data'
          width={500}
          height={500}
        />
      </div>
      {/* ***************************************************** */}
      <div className={styles.bImg}>
        <Image
          src={'/imgs/LandingPage/Section2/WorkTogetherImage.png'}
          alt='Analyze Data'
          width={710}
          height={661}
        />
      </div>
      <div className={styles.bText}>
        <h2>
          Work together
        </h2>
        <p>
          With whitepace, share your notes with your colleagues and collaborate on them.
          You can also publish a note to the internet and share the URL with others.
        </p>
        <button className={styles.bButton}>Try it now</button>
      </div>

    </div>
  )
}