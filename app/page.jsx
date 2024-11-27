import Image from "next/image";
import styles from '~/scss/LandingPage/_MainPage.module.scss';
import HeroSection from "@/components/LandingPage/HeroSection";
import Section2 from "~/components/LandingPage/Section2";
import Extension from "~/components/LandingPage/Extension";
import Customise from "~/components/LandingPage/Customise";
import ChooseYourPlan from "~/components/LandingPage/ChooseYourPlan";
import YourWork from "~/components/LandingPage/YourWork";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <Section2 />
        <Extension />
        <Customise /> 
        <ChooseYourPlan />
        <YourWork />
        <br />
        <br />
        <br />
        words
      </main>
    </div>
  );
}
