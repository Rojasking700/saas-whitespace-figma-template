import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="ps-header">
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
      
    </div>
  )
}