// import stylesExtension from '~/scss/LandingPage/Extension.module.scss';
import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
import Wireframe2 from '~/public/imgs/LandingPage/customise/Wireframe2.png';
import PointRightArrow from '~/public/icons/PointRightArrow.png';

export default function Customise() {
  return (
    <div className={`${styles.section}`}>
      <div className={styles.sectionTwoImg}>
        <Image
          src={Wireframe2}
          alt='Analyze Data'
        />
      </div>

      <div className={styles.sectionTwoText}>
        <h2>
          Customize it to your needs
        </h2>
        <p>
          Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
        </p>
        <button className={styles.sectionTwoButton} >
          Lets Go
          <Image
            src={PointRightArrow}
            alt="Point Right Arrow"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  )
}