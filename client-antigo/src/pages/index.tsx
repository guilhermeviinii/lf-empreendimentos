import Head from "next/head";

import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./home.module.scss";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Map } from "../components/Map";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import { useSession } from "next-auth/client";
import { api } from "../services/api";
import { GetServerSideProps, GetStaticProps } from "next";
import { FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";

interface HomeProps {
  services: Servico[];
}

interface Servico {
  titulo: string;
  descricao: string;
  cover: Cover;
  slug: string;
  media: [];
}

type Cover = {
  name: string;
  url: string;
};

function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default function Home({ services }: HomeProps) {
  const [servicos, setServicos] = useState<Servico[]>(services);
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => { }, []);
  return (
    <>
      <Head>
        <title>LF - Engenharia</title>
      </Head>

      <Carousel>
        <Carousel.Item>
          <div className={styles.banner}>
            <img
              className="d-block w-100"
              src="/images/home/banner.png"
              alt="First slide"
            />
            <div>
              <h2>EMPRESA</h2>
              <p>
                A LF engenharia é uma empresa de Engenharia Civil <br />
                com diversas áreas de atuações. Dentre elas: <br />- A
                regularização de imóveis comerciais, residenciais, rural e...{" "}
                <Link href="/empresa">
                  <b className={styles.lerMore}> leia mais</b>
                </Link>
              </p>
              <Link href="/servicos">CONHEÇA NOSSOS SERVIÇOS</Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className={styles.container}>
        <section className={styles.company}>
          <h1>Nossa Empresa</h1>
          <div>
            <img
              src="/images/home/foto-funcionario.png"
              alt="Foto dos funcionários"
            />
            <div>
              <span className={styles.title}>EMPRESA</span>
              <p>
                A LF engenharia é uma empresa de Engenharia Civil com diversas
                áreas de atuações. <br /> Dentre elas: <br />
                <FaChevronRight />A regularização de imóveis comerciais,
                residenciais, rural e urbano; <br /> <FaChevronRight />
                Serviço de desmembramento e desdobro de área/lotes urbanos;
                <br /> <FaChevronRight />
                Loteadora com financeamento próprio de lotes; <br />{" "}
                <FaChevronRight />
                Construtora; <br /> <FaChevronRight />
                Administração e acompanhamento de obras;
                <br /> <FaChevronRight />
                Elabora projetos arquitetônicos, estruturais, hidráulico
                residencial, elétrica de baixa tensão, planta baixa humanizada,
                serviço de design em 3D (fachadas, interiores, loteamentos,
                móveis); <br /> <FaChevronRight />
                Projetos junto à prefeitura, cartório e órgãos federais (alvará
                de construção, alvará de regularização, habite-se).
                <br />
                <FaChevronRight />
                Loteamentos e projetos de loteamentos A LF possui um corpo
                técnico especializado com mais de 30 anos de experiência, com
                dois engenheiros civis...
                <Link href="/empresa">
                  <span className={styles.lerMore}>ler mais</span>
                </Link>
              </p>
            </div>
          </div>
        </section>
        <div className={styles.services}>
          <h1>Serviços</h1>
          <Slider {...settings} className={styles.customArrows}>
            {servicos.map((servico) => (
              <Link href={`/servicos/${servico.slug}`} key={servico.slug}>
                <div className={styles.cardService}>
                  <img
                    src={servico.cover?.url}
                    width="100%"
                    alt="Foto do serviço"
                  />
                  <div>
                    <strong>{servico.titulo}</strong>
                    <p>{servico.descricao.slice(0, 140) + "..."}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>

      <Map />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [services] = await Promise.all([api.get("servicos")]);

    return {
      props: {
        services
      },
      revalidate: 60 * 3,
    };

  } catch (error) {
    return {
      props: {
        services: []
      },
      revalidate: 60 * 3,
    };
  }
};
