import "./globals.css";
import styles from '~/scss/_MainLayout.module.scss'
import MainHeader from "@/components/header/MainHeader";

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Saas Whitepace",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.layout_container}`}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
