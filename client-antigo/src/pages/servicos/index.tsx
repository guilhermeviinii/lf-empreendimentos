import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HeaderSecondary } from "../../components/HeaderSecondary";
import { Map } from "../../components/Map";
import { api } from "../../services/api";
import styles from "./servicos.module.scss";

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

export default function Servico() {
  const [servicos, setServicos] = useState<Servico[]>([]);

  useEffect(() => {
    async function loadServicos() {
      try {
        const { data } = await api.get("servicos");
        return setServicos(data);
      } catch (error) {
        return setServicos([]);
      }
    }
    loadServicos();
  }, []);

  return (
    <>
      <Head>
        <title>LF - Engenharia | Serviços</title>
      </Head>
      <HeaderSecondary title="SERVIÇOS" />
      <div className="container">
        <div className={styles.cardsServicos}>
          {servicos ? servicos.map((servico) => (
            <Link key={servico.slug} href={`/servicos/${servico.slug}`}>
              <a>
                <img
                  src={servico.cover?.url}
                  width="100%"
                  alt="Foto do serviço"
                />
                <div>
                  <strong>{servico.titulo}</strong>
                  <p>
                    {servico.descricao.slice(0, 140) + '...'}
                    <strong>continuar lendo!</strong>
                  </p>
                </div>
              </a>
            </Link>
          )): (
            <div>
              <h1>Não foi possível encontrar nenhum serviço no momento...</h1>
            </div>
          )}
        </div>
      </div>
      <Map />
    </>
  );
}
