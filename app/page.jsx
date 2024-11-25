import Image from "next/image";
import styles from '~/scss/LandingPage/MainPage.module.scss';
import HeroSection from "@/components/LandingPage/HeroSection";
import Section2 from "~/components/LandingPage/section2";
import Extension from "~/components/LandingPage/Extension";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <Section2 />
        <Extension />
      </main>
    </div>
  );
}
