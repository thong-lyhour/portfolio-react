import Link from "next/link";
import Nav from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./mobileNav";
import Name from "./name";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
            <Name />
        </Link>

        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href='/contact'>
            <Button>Hire Me</Button>
          </Link> */}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden"> <MobileNav/> </div>

      </div>
    </header>
  );
};

export default Header;
