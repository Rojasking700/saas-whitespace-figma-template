import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
import AppIcons from '~/public/imgs/LandingPage/tryToday/AppIcons.png';

export default function TryToday() {

  return (
    <div className={styles.tryToday}>
      <div className={styles.innerCont}>

        <h1>Try Whitepace today</h1>
        <p>
          Get started for free.
          <br />
          Add your whole team as your needs grow.
        </p>
        {/* <p></p> */}
        <button>Try Taskey free</button>
        <p>On a big team? Contact sales</p>
        <Image
          src={AppIcons}
          alt='App icons'
        />
      </div>
    </div>
  )
}