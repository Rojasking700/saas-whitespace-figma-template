import styles from '~/scss/LandingPage/SectionTwo.module.scss'
import Image from 'next/image'
import Element from '~/public/imgs/LandingPage/yourData/Element.png'
import sponsorsImg from '~/public/imgs/LandingPage/ourSponsors/sponsors.png'

export default function YourData() {
  return (
    <div>
      <div className={styles.section}>

        <div className={styles.sectionTwoText}>
          <h2>
            100% your data
          </h2>
          <p>
            The app is open source and your notes are saved to an open format, so you'll always have access to them.
            Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
          </p>
          <button className={styles.sectionTwoButton} >Read More</button>
        </div>
        <div className={styles.sectionTwoImg}>
          <Image
            src={Element}
            alt='Data'
          // width={500}
          // height={500}
          />
        </div>
        {/* ***************************************************** */}


      </div>
      <div className={styles.ourSponsors}>
        <h1>Our sponsors</h1>
        <Image
          src={sponsorsImg}
          alt='Sponsors'
        />
      </div>
    </div>
  )
}