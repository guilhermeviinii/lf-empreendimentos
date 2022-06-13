import React, { useEffect, useState } from "react";
import {
  FaUserAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaHamburger,
  FaWindowClose,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";

import styles from "./styles.module.scss";

export function Header() {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header className={styles.contentContainer}>
      <div className={styles.contentHeader}>
        <div className={styles.logo}>
          <img src="/images/home/logo.png" alt="Logo LF Engenharia" />
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/LF-Engenharia-108279134120385"
            >
              <FaFacebook color="#FFF" size={25} />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/l.f._engenharia/ "
            >
              <FaInstagram color="#FFF" size={25} />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=551732621257&text="
            >
              <FaWhatsapp color="#FFF" size={25} />
            </a>
          </div>
        </div>
        <div
          onClick={() => setNavMobile(!navMobile)}
          className={styles.hamburguer}
        >
          <FaBars size={30} color={"white"} />
        </div>
        <ul className={!navMobile ? styles.navDesktop : styles.navMobile}>
          <div
            className={styles.closeMobileNav}
            onClick={() => setNavMobile(false)}
          >
            <FaWindowClose size={30} color={"white"} />
          </div>
          <li>
            <Link href="/">
              <a
                onClick={() => {
                  setNavMobile(false);
                }}
              >
                INÍCIO
              </a>
            </Link>
          </li>
          <li>
            <Link href="/empresa">
              <a
                onClick={() => {
                  setNavMobile(false);
                }}
              >
                EMPRESA
              </a>
            </Link>
          </li>
          <li>
            <Link href="/servicos">
              <a
                onClick={() => {
                  setNavMobile(false);
                }}
              >
                SERVIÇO
              </a>
            </Link>
          </li>
          <li>
            <Link href="#contato">
              <a
                onClick={() => {
                  setNavMobile(false);
                }}
              >
                CONTATO
              </a>
            </Link>
          </li>
          <li>
            <a
              href="http://lfempreendimentos.sistemasgl.com.br/portaldocliente/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setNavMobile(false);
              }}
            >
              <FaUserAlt />
              ÁREA DO CLIENTE
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
