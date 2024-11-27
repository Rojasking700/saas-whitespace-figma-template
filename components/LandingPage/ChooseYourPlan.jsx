import stylesExtension from '~/scss/LandingPage/Extension.module.scss';
import styles from '~/scss/LandingPage/SectionTwo.module.scss';
import Image from 'next/image';
// import Wireframe from '~/public/imgs/LandingPage/customise/Wireframe.png'
import Wireframe2 from '~/public/imgs/LandingPage/customise/Wireframe2.png';
import PointRightArrow from '~/public/icons/PointRightArrow.png';

export default function ChooseYourPlan() {

  const plansInfo = [
    {
      title: 'Free',
      price: 0,
      summary: 'Capture ideas and find them quickly',
      bulletPoints: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ]
    },
    {
      title: 'Personal',
      price: 11.99,
      summary: 'Keep home and family on track',
      bulletPoints: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ]
    },
    {
      title: 'Organization',
      price: 49.99,
      summary: 'Capture ideas and find them quickly',
      bulletPoints: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ]
    }
  ]


  return (
    <div className={styles.chooseYourPlan}>
      <div className={styles.CYP_title}>
        <h1>Choose Your Plan</h1>
        <p>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
      </div>
      <div className={styles.plans}>
        {
          plansInfo.map((plan, index) => (
              <div key={index} className={styles.planCard}> 
                <h5>{plan.title}</h5>
                <h4>${plan.price}</h4>
                <p>{plan.summary}</p>
                <ul>
                  {
                    plan.bulletPoints.map((bp, index2) => (
                      <li key={index2}>
                        {bp}
                      </li>
                    ))
                  }
                </ul>
                <button>Get Started</button>
              </div>
            ))
        }
      </div>

    </div>
  )
}