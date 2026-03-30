"use client";

import { useEffect } from "react";
import css from "./MobileMenu.module.css";
import { Icons } from "../Icons/Icons";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className={`${css.overlay} ${isOpen ? css.overlayOpen : ""}`}
      onClick={handleBackdropClick}
    >
      <div className={`${css.menu} ${isOpen ? css.menuOpen : ""}`}>
        <button
          type="button"
          className={css.closeButton}
          aria-label="Закрити меню"
          onClick={onClose}
        >
          <Icons id="icon-cancel" width={32} height={32} stroke="#000000" />
        </button>
        <nav className={css.menuNav}>
          <Link href={"/news"} className={css.menuItem}>
            News
          </Link>
          <Link href={"/notices"} className={css.menuItem}>
            Find pet
          </Link>
          <Link href={"/friends"} className={css.menuItem}>
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
            className={`${css.registrationItem} ${css.registrationBtn}`}
          >
            Registration
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
