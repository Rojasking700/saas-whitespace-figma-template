import Image from "next/image";
import styles from '~/scss/LandingPage/MainPage.module.scss';
import HeroSection from "@/components/LandingPage/HeroSection";
import Section2 from "~/components/LandingPage/section2";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <Section2 />
      </main>
    </div>
  );
}
