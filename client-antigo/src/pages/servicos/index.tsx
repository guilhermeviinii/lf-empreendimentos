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
      const { data } = await api.get("servicos");
      setServicos(data);
      console.log(data);
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
          {servicos.map((servico) => (
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
                    {servico.descricao.slice(0, 140)+ '...'}
                    <strong>continuar lendo!</strong>
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <Map />
    </>
  );
}

function useRouter() {
  throw new Error("Function not implemented.");
}
