import styles from '~/scss/LandingPage/SectionTwo.module.scss'
import Image from 'next/image'
import GroupImg from '~/public/imgs/LandingPage/section2/Group.png'
import CodingAWebsite from '~/public/imgs/LandingPage/section2/CodingAWebsite.png'
import WorkTogetherImage from '~/public/imgs/LandingPage/section2/WorkTogetherImage.png'

export default function Section2() {
  return (
    <div>
      <div className={`${styles.section}  `}>
        <div className={styles.sectionTwoText}>
          <Image
            className={styles.groupImg}
            src={GroupImg}
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
            src={CodingAWebsite}
            alt='Analyze Data'
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* ***************************************************** */}
      <div className={`${styles.section}  `}>
        <div className={styles.sectionTwoImg}>
          <Image
            src={WorkTogetherImage}
            alt='Analyze Data'
            width={710}
            height={661}
          />
        </div>
        <div className={styles.sectionTwoText}>
          <h2>
            Work together
          </h2>
          <p>
            With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.
          </p>
          <button className={styles.sectionTwoButton}>Try it now</button>
        </div>

      </div>

    </div>
  )
}