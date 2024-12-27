import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
import Quote from '~/public/imgs/LandingPage/clientSay/Quote.png';
import BlueQuote from '~/public/imgs/LandingPage/clientSay/BlueQuote.png';
import Avater from '~/public/imgs/LandingPage/clientSay/Avater.png';
import Avater2 from '~/public/imgs/LandingPage/clientSay/Avater2.png';
import Avater3 from '~/public/imgs/LandingPage/clientSay/Avater3.png';

export default function ClientSay() {

  const clientsTesti = [
    {
      quote: BlueQuote,
      testimonee: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      name: 'Oberon Shaw, MCH',
      personDesc: 'Head of Talent Acquisition, North America',
      headShot: Avater,
    },
    {
      quote: Quote,
      testimonee: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      name: 'Oberon Shaw, MCH',
      personDesc: 'Head of Talent Acquisition, North America',
      headShot: Avater2,
    },
    {
      quote: Quote,
      testimonee: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      name: 'Oberon Shaw, MCH',
      personDesc: 'Head of Talent Acquisition, North America',
      headShot: Avater3,
    },
  ]


  return (
    <div className={styles.clientSay}>
      <div className={styles.CS_title}>
        <h2>What Our Clients Says</h2>
      </div>
      <div className={styles.outerTestimonees}>
        <div className={styles.testimonees}>
          {
            clientsTesti.map((client, index) => (
              <div key={index} className={styles.testi}>
                <div className={styles.testiTop}>
                  <Image
                    src={client.quote}
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

    </div>
  )
}