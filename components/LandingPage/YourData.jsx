import styles from '~/scss/LandingPage/SectionTwo.module.scss'
import Image from 'next/image'
import Element from '~/public/imgs/LandingPage/yourData/Element.png'
import Apple from '~/public/imgs/LandingPage/ourSponsors/Apple.png'
import Google from '~/public/imgs/LandingPage/ourSponsors/Google.png'
import Microsoft from '~/public/imgs/LandingPage/ourSponsors/Microsoft.png'
import Slack from '~/public/imgs/LandingPage/ourSponsors/Slack.png'

export default function YourData() {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionTwoText}>
          <h2>
            100% your data
          </h2>
          <p>
            The app is open source and your notes are saved to an open format, so you&apos;l always have access to them.
            Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
          </p>
          <button className={styles.sectionTwoButton} >Read More</button>
        </div>
        <div className={styles.sectionTwoImg}>
          <Image
            src={Element}
            alt='Data'
          />
        </div>
      </div>

      <div className={styles.ourSponsors}>
        <h2>Our sponsors</h2>
        <div className={styles.sponsors}>
          <Image
            src={Apple}
            alt='Apple'
          />
          <Image
            src={Google}
            alt='Google'
          />
          <Image
            src={Microsoft}
            alt='Microsoft'
          />
          <Image
            src={Slack}
            alt='Slack'
          />
        </div>
      </div>
    </div>
  )
}