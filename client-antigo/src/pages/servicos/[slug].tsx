import React, { useEffect } from "react";
import { HeaderSecondary } from "../../components/HeaderSecondary";
import { Map } from "../../components/Map";
import { useRouter } from "next/router";
import styles from "./servico.module.scss";
import ImageZoom from "react-medium-image-zoom";
import { api } from "../../services/api";
import { GetStaticPaths, GetServerSideProps } from "next";
import { FaMapMarkerAlt, FaMarker } from "react-icons/fa";

async function getServicesBySlug(slug: string | string[]) {
  const { data } = await api.get(`servicos?slug=${slug}`);
  return data;
}

interface ProducaoProps {
  service: Servico;
}

interface Servico {
  titulo: string;
  descricao: string;
  cover: Cover;
  slug: string;
  imagens: Imagens[];
  localizacao: string;
}

type Cover = {
  name: string;
  url: string;
};

type Imagens = {
  id: number;
  url: string;
  formats: {
    url: string;
    small: {
      url: string;
    };
    thumbnail: {
      url: string;
    };
  };
};

export default function ProducaoDeProjeto({ service }: ProducaoProps) {
  return (
    <>
      <HeaderSecondary title={service.titulo} />
      <div className="container">
        <div className={styles.cardsServicos}>
          {service.imagens?.length ? (
            service.imagens.map((image) => {
              return (
                <ImageZoom
                  key={image.id}
                  image={{
                    src: `${image.url || image.formats?.thumbnail?.url}`,
                    alt: "Golden Gate Bridge",
                    className: "img",
                  }}
                  zoomImage={{
                    src: `${image.formats?.url}`,
                    alt: "Golden Gate Bridge",
                  }}
                />
              );
            })
          ) : (
            <h1>Foto não encontrada...</h1>
          )}
          <div>
            <p>{service.descricao}</p>
          </div>
        </div>
        {service.localizacao && (
          <div className={styles.localizacaoServico}>
            <div>
              <span>
                <FaMapMarkerAlt size={20} /> Localização{" "}
              </span>
              <p>{service.localizacao}</p>
            </div>
          </div>
        )}
      </div>
      <Map />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const [service] = await Promise.all([getServicesBySlug(ctx.params.slug)]);

    return {
      props: {
        service
      },
    };

  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: { service: {} },
    };
  }

};
