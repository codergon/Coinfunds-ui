"use client";

import Link from "next/link";
import Image from "next/image";
import { APP_URL } from "@/utils/constants";
import { CurrencyCircleDollar, ProjectorScreen } from "phosphor-react";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-content__text">
          <h1>Empower Your Dreams, Fuel Your Ambitions</h1>
          <p className="hero-content__text-subtitle">
            Join our revolutionary platform powered by Circle USDC, where
            individuals come together to create and fund impactful campaigns.
          </p>
          <div className="hero-content__text__actions">
            <Link
              href="https://github.com/codergon/Coinfunds/blob/master/backend/ReadMe.md"
              className="default-button"
            >
              <ProjectorScreen size={13} weight="regular" />
              How it works
            </Link>
            <Link href={APP_URL} className="default-button default-button-dark">
              <CurrencyCircleDollar size={15} weight="regular" />
              Fund a campaign
            </Link>
          </div>
        </div>

        <div className="hero-content__dashboard">
          <Image
            width={500}
            height={500}
            alt="Dashboard Screenshot"
            src={"/images/app-dashboard.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
