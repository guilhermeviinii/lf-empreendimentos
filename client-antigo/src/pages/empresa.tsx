import React from "react";
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";

import Head from "next/head";
import Link from "next/link";

import { Map } from "../components/Map";
import { HeaderSecondary } from "../components/HeaderSecondary";
import SLIDER_SETTINGS from "../core/constants/slider-settings";

import styles from "./empresa.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Empresa() {
  const settings = SLIDER_SETTINGS
  return (
    <>
      <Head>
        <title>LF - Engenharia | Empresa</title>
      </Head>
      <HeaderSecondary title="EMPRESA" />
      <div className="container">
        <div className={styles.sobreEmpresa}>
          <p key={1}>
            <img
              src="/images/empresa/foto-empresa.png"
              alt="Imagem da Empresa"
            />
            <span>EMPRESA</span>
            <p>
              A LF engenharia é uma empresa de Engenharia Civil com diversas
              áreas de atuações.
            </p>
            <p>Dentre elas:</p>
            <p>
              <FaChevronRight />A regularização de imóveis comerciais,
              residenciais, rural e urbano;
            </p>
            <p>
              <FaChevronRight />
              Serviço de desmembramento e desdobro de área/lotes urbanos;
            </p>
            <p>
              <FaChevronRight />
              Loteadora com financeamento próprio de lotes;
            </p>
            <p>
              <FaChevronRight />
              Construtora;
            </p>
            <p>
              <FaChevronRight />
              Administração e acompanhamento de obras;
            </p>
            <p>
              <FaChevronRight />
              Elabora projetos arquitetônicos, estruturais, hidráulico
              residencial, elétrica de baixa tensão, planta baixa humanizada,
              serviço de design em 3D (fachadas, interiores, loteamentos,
              móveis);
            </p>
            <p>
              <FaChevronRight />
              Projetos junto à prefeitura, cartório e órgãos federais (alvará de
              construção, alvará de regularização, habite-se).
            </p>
            <p>
              <FaChevronRight />
              Loteamentos e projetos de loteamentos A LF possui um corpo técnico
              especializado com mais de 30 anos de experiência, com dois
              engenheiros civis.
            </p>
            <p>
              A LF é responsável pelos loteamentos atuais na cidade de Nova
              Granada, como o "Residencial dos Ipês", "Residencial Canile" e
              está em andamento com mais dois novos loteamentos na cidade. Além
              do Loteamento "Residêncial Marinez" na cidade de Monte Aprazível -
              SP.
            </p>
            <p>
              O corpo técnico da empresa já elaborou e executou diversos outros
              empreendimentos na cidade de Nova Granada, sendo a construção do
              primeiro prédio na cidade, além de 5 prédios na cidade de São José
              do Rio Preto e diversas casas residenciais e salões comerciais.
              Também executou diversos outros loteamentos em Nova Granada como o
              "Residêncial Havana Deville", "Havana", "Jardim vivendas". Em
              icém, "Aldeia dos Lagos", em Ipiguá "Residencial Athenas", em
              Palestina "Residencial Atlantis"
            </p>
          </p>
          <Link href="/servicos"> CONHEÇA NOSSOS SERVIÇOS</Link>
        </div>
        <Slider {...settings}>
          <div className={styles.cardService}>
            <img
              src="/images/empresa/foto-cadeiras.png"
              width="100%"
              alt="Foto do serviço"
            />
          </div>
          <div className={styles.cardService}>
            <img
              src="/images/empresa/foto-escritorio.png"
              width="100%"
              alt="Foto do serviço"
            />
          </div>
          <div className={styles.cardService}>
            <img
              src="/images/empresa/foto-escritorio-2.png"
              width="100%"
              alt="Foto do serviço"
            />
          </div>
          <div className={styles.cardService}>
            <img
              src="/images/empresa/foto-escritorio-3.png"
              width="100%"
              alt="Foto do serviço"
            />
          </div>
        </Slider>
      </div>
      <Map />
    </>
  );
}
