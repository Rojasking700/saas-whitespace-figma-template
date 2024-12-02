import Image from "next/image";
import Link from "next/link";
import '~/scss/MainHeader/MainHeader.scss';
import logo from '~/public/imgs/logos/Logo.png';
import DownArrow from '~/public/icons/DownArrow.png';

export default function MainHeader() {
  return (
    <nav className="ps-main-header">
      <div className="ps-header-logo">
        <Link href={'/'} >
          <Image
            src={logo}
            alt="Whitespace logo"
            width={191}
            height={34}
            priority={true}
          />
        </Link>
      </div>
      <div className="ps-main-header-nav">
        <div className="ps-main-header-nav-links">
          <Link href={"#"} className="ps-nav-link" >
            Products
            <Image
              src={DownArrow}
              alt="DownArrow"
              width={29}
              height={24}
            />
          </Link>
          <Link href={"#"} className="ps-nav-link" >
            Solutions
            <Image
              src={DownArrow}
              alt="DownArrow"
              width={29}
              height={24}
            /></Link>
          <Link href={"#"} className="ps-nav-link" >
            Rescources
            <Image
              src={DownArrow}
              alt="DownArrow"
              width={29}
              height={24}
            />
          </Link>
          <Link href={"#"} className="ps-nav-link" >
            Pricing
            <Image
              src={DownArrow}
              alt="DownArrow"
              width={29}
              height={24}
            />
          </Link>
        </div>
        <div className="ps-main-header-nav-btns">
          <button className="ps-main-header-nav-login-btn" >Login</button>
          <button className="ps-main-header-nav-free-trial-btn" >
            Try Whitepace free
            </button>
        </div>
      </div>

    </nav>
  )
}