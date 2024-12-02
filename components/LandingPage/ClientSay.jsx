import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
import Quote from '~/public/imgs/LandingPage/clientSay/Quote.png';
import Avater from '~/public/imgs/LandingPage/clientSay/Avater.png';
import Avater2 from '~/public/imgs/LandingPage/clientSay/Avater2.png';
import Avater3 from '~/public/imgs/LandingPage/clientSay/Avater3.png';

export default function ClientSay() {

  const clientsTesti = [
    {
      testimonee: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      name: 'Oberon Shaw, MCH',
      personDesc: 'Head of Talent Acquisition, North America',
      headShot: Avater,
    },
    {
      testimonee: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      name: 'Oberon Shaw, MCH',
      personDesc: 'Head of Talent Acquisition, North America',
      headShot: Avater2,
    },
    {
      testimonee: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      name: 'Oberon Shaw, MCH',
      personDesc: 'Head of Talent Acquisition, North America',
      headShot: Avater3,
    },
  ]


  return (
    <div className={styles.clientSay}>
      <div className={styles.CS_title}>
        <h1>What Our Clients Says</h1>
      </div>
      <div className={styles.testimonees}>
        {
          clientsTesti.map((client, index) => (
            <div key={index} className={styles.testi}>
              <div className={styles.testiTop}>
                <Image
                  src={Quote}
                  alt='Quote image'
                />
                <p>{client.testimonee}</p>
              </div>
              <div className={styles.testiBottom}>
                <Image
                  src={client.headShot}
                  alt={'Client headshot ' + index}
                />

                <div className={styles.personDesc}>
                  <h5>{client.name}</h5>
                  <p>{client.personDesc}</p>
                </div>

              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}