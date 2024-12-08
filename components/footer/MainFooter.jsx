import styles from '~/scss/MainFooter/MainFooter.module.scss';
import logo from '~/public/imgs/logos/Logo.png';
import Image from "next/image";
import Link from "next/link";
import SocialIcons from '~/public/imgs/footer/SocialIcons.png';
import LangGlobIcon from '~/public/icons/LangGlobIcon.png';
import DownArrow from '~/public/icons/DownArrow.png';

export default function MainFooter() {

  const links = [
    {
      title: 'Product',
      links: [
        'Overview',
        'Pricing',
        'Customer stories'
      ],
    },
    {
      title: 'Resources',
      links: [
        'Blog',
        'Guides & tutorials',
        'Help center'
      ],
    },
    {
      title: 'Company',
      links: [
        'About us',
        'Careers',
        'Media kit'
      ],
    },
  ]

  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerTop} > {/* top */}

        <div className={styles.whitepceFooter} > {/* logo */}
          <Link href={'/'} >
            <Image
              src={logo}
              alt="Whitespace logo"
              width={191}
              height={34}
              priority={true}
            />
          </Link>
          <p>
            Whitepace was created for the new ways we live and work. We make a better workspace around the world
          </p>
        </div>

        {
          links.map((link, index) => (
            <div className={styles.linkDiv} key={index}>
              <h5>{link.title}</h5>
              <ul>
                {link.links.map((lin, index) => (
                  <li key={index} >{lin}</li>
                ))}
              </ul>
            </div>
          ))
        }

        <div className={styles.tryTodayFooter} > {/* try today */}
          <h5>Try It Today</h5>
          <p>Get Started for free. Add your whole team as your needs grow.</p>
          <button>Start Today</button>
        </div>

      </div>

      <div className={styles.footerBottom} >
        {/* copy right stuff */}
        <ul>
          <li
            className={styles.language}
          >
            <Image
              src={LangGlobIcon}
              alt='Language Globe Icon'
            />
            English
            <Image
              src={DownArrow}
              alt='Down Arrow'
            />
          </li>
          <li>Terms & privacy</li>
          <li>Security</li>
          <li>Status</li>
          <li>@2021 Whitepace LLC.</li>
        </ul>

        <Image
          src={SocialIcons}
          alt='App Icons'
        />

      </div>
    </footer>
  )
}