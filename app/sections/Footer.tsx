"use client";

import Link from "next/link";
import Image from "next/image";
import { APP_URL } from "@/utils/constants";
import { ArrowRight, GithubLogo, TwitterLogo } from "phosphor-react";
import Icons from "@/components/Icons";
import Illustrations from "@/components/illustrations";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer-card">
          <div className="footer-card__content">
            <div className="footer-card__content-texts">
              <h1 className="footer-card__content-title">
                Commit to your goals <br /> to help others today
              </h1>
            </div>

            <Link href={APP_URL} className="start-button">
              Launch App
              <ArrowRight size={12} weight="bold" />
            </Link>
          </div>

          <div className="footer-card__illustration">
            <Illustrations.CoinPlant />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer-notes">
          <div className="footer-notes-brand">Coinfunds ©2023</div>
          <div className="footer-notes-links">
            <Link href="/">
              <span>•</span> Terms of Service
            </Link>
            <Link href="/">
              <span>•</span> Privacy Policy
            </Link>
          </div>
        </div>

        <div className="external-links">
          <Link
            href="https://github.com/codergon/Coinfunds"
            target="_blank"
            className="external-link"
          >
            <Icons.GitHubLogo size={17} className="icon" />
            <span className="label">GitHub</span>
          </Link>

          <Link href="/" target="_blank" className="external-link">
            <TwitterLogo size={17} weight="fill" className="icon" />
            <span className="label">Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
