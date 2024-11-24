import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="ps-main-header">
      <div className="ps-header-logo">
        <Link href={'/'} >
          <Image
            src="/imgs/logos/Logo.png"
            alt="Whitespace logo"
            width={191}
            height={34}
          />
        </Link>
      </div>
      <div className="ps-main-header-nav">
        <div className="ps-main-header-nav-links">
          <Link href={"#"} className="ps-nav-link" >
            Products
            <Image
              src="/icons/DownArrow.png"
              alt="DownArrow"
              width={29}
              height={24}
            />
          </Link>
          <Link href={"#"} className="ps-nav-link" >
            Solutions
            <Image
              src="/icons/DownArrow.png"
              alt="DownArrow"
              width={29}
              height={24}
            /></Link>
          <Link href={"#"} className="ps-nav-link" >
            Rescources

            <Image
              src="/icons/DownArrow.png"
              alt="DownArrow"
              width={29}
              height={24}
            />
          </Link>
          <Link href={"#"} className="ps-nav-link" >
            Pricing

            <Image
              src="/icons/DownArrow.png"
              alt="DownArrow"
              width={29}
              height={24}
            />
          </Link>
        </div>
        <div className="ps-main-header-nav-btns">
          <button>Login</button>
          <button>Try Whitepace </button>
        </div>
      </div>

    </div>
  )
}