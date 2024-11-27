import stylesExtension from '~/scss/LandingPage/Extension.module.scss';
import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
import PointRightArrow from '~/public/icons/PointRightArrow.png';
import GroupImg from '~/public/imgs/LandingPage/yourWork/Group2.png';

export default function YourWork() {


  return (
    <div className={styles.yourWork}>
      <Image
        className={styles.YW_groupImg}
        src={GroupImg}
        alt='Background'
      />
      <h1>Your work, everywhere you are</h1>
      <p>
        Access your notes from your computer, phone or tablet by synchronising with
        various services, including whitepace, Dropbox and OneDrive.
        The app is available on Windows, macOS, Linux, Android and iOS.
        A terminal app is also available!
      </p>
      <button>
        Try Taskey
        <Image
          src={PointRightArrow}
          alt='Point Right Arrow'
        />
      </button>


    </div>
  )
}