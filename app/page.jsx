import Image from "next/image";
import styles from '~/scss/LandingPage/MainPage.module.scss';
import HeroSection from "@/components/LandingPage/HeroSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
      </main>
    </div>
  );
}
