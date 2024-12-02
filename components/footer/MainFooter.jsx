import styles from '~/scss/MainFooter/MainFooter.module.scss';

export default function MainFooter() {

  const links =[
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
      <div>
        {/* top */}
        <div>
          {/* logo */}
        </div>
        <div>
          {/* links */}
        </div>
        <div>
          {/* try today */}
        </div>
      </div>
      <div>
        {/* copy right stuff */}
      </div>
    </footer>
  )
}