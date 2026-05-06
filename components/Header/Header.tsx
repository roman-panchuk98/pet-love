"use client";

import Link from "next/link";
import { Icons } from "../Icons/Icons";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainSite = pathname === "/";

  return (
    <header>
      <div
        className={`${css.container} ${mainSite ? css.mainSiteContainer : ""}`}
      >
        <div
          className={`${css.headerBox} ${mainSite ? css.headerHeroBlock : ""} `}
        >
          <Link href="/" className={css.logo}>
            {mainSite ? (
              <Icons
                id="icon-logo-white"
                width={76}
                height={20}
                className={css.logoSvg}
              />
            ) : (
              <Icons
                id="icon-logo"
                width={76}
                height={20}
                className={css.logoSvg}
              />
            )}
          </Link>

          <div className={css.navigation}>
            <nav
              className={`${css.menuNav} ${mainSite ? css.menuNavHeroBlock : ""}`}
            >
              <Link
                href={"/news"}
                className={`${css.menuItem} ${mainSite ? css.menuItemHeroBlock : ""} ${pathname === '/news' ? css.isActivePage : ''}`}
              >
                News
              </Link>
              <Link
                href={"/notices"}
                className={`${css.menuItem} ${mainSite ? css.menuItemHeroBlock : ""}  ${pathname === '/notices' ? css.isActivePage : ''}`}
              >
                Find pet
              </Link>
              <Link
                href={"/friends"}
                className={`${css.menuItem} ${mainSite ? css.menuItemHeroBlock : ""}  ${pathname === '/friends' ? css.isActivePage : ''}`}
              >
                Our friends
              </Link>
            </nav>
            <nav className={css.registrationList}>
              <Link
                href={"/login"}
                className={`${css.registrationItem} ${css.registrationLoginBtn}`}
              >
                Log In
              </Link>
              <Link
                href={"/register"}
                className={`${css.registrationItem} ${css.registrationBtn} `}
              >
                Registration
              </Link>
            </nav>
          </div>
          <div className={css.menuBox}>
            <div className={css.userIcon}>
              <Icons id="icon-user" width={20} height={20} />
            </div>
            <button
              type="button"
              className={css.burgerBtn}
              aria-label="Відкрити меню"
              onClick={() => setIsMenuOpen(true)}
            >
              <Icons
                id="icon-burger-menu"
                width={32}
                height={32}
                stroke={` ${mainSite ? "white" : "black"}`}
              />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
