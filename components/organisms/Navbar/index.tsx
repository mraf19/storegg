import Image from "next/image";
import MenuNavbar from "./MenuNavbar";
import { useRouter } from "next/router";
import SignInComp from "./SignInComp";
import { useState } from "react";
import ToggleMenu from "./ToggleMenu";
import Link from "next/link";
import menus from "../../../data/menus.json";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image
              src={"/icon/logo.svg"}
              width={60}
              height={60}
              alt="logo StoreGG"
            />
          </Link>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              {menus.map((menu, index: number) => (
                <MenuNavbar
                  key={`menuNav-${index}`}
                  title={menu.name}
                  active={menu.path === router.pathname}
                  path={menu.path}
                />
              ))}
              <SignInComp isLoggedIn={isLoggedIn} />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
