"use client";

import Link from "next/link";
import Icons from "@/components/Icons";
import { APP_URL } from "@/utils/constants";
import { ArrowUpRight } from "phosphor-react";
import { useBattery, useWindowSize } from "react-use";

function Navbar() {
  const { width } = useWindowSize();

  const batteryState = useBattery();

  return (
    <div className="c-navbar">
      <div className="c-navbar__content">
        <Link href="/" className="c-navbar__content__logo">
          <Icons.AppLogo size={width < 450 ? 100 : 130} />
        </Link>
        <div className="c-navbar__content__menu">
          <Link target="_blank" href="https://github.com/codergon/Coinfunds">
            <p>GitHub</p>
            <ArrowUpRight size={13} weight="bold" />
          </Link>

          <Link href={APP_URL} className="c-button">
            <p>Get Started</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
