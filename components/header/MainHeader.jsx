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
          <Link href={"#"}>Products</Link>
          <Link href={"#"}>Solutions</Link>
          <Link href={"#"}>Rescources</Link>
          <Link href={"#"}>Pricing</Link>
        </div>
        <div className="ps-main-header-nav-btns">
          <button>Login</button>
          <button>Try Whitepace free</button>
        </div>
      </div>
      
    </div>
  )
}