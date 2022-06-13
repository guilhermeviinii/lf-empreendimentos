import axios from "axios";
import React, { FormEvent, useState } from "react";
import { Toast } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaMapMarked,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import enviarEmail from "../../pages/api/enviarEmail";
import styles from "./styles.module.scss";

interface CamposProps {
  nome: string;
  email: string;
  orcamento: string;
  telefone: string;
  mensagem: string;
}

type Inputs = {
  name: string;
  email: string;
  orcamento: string;
  telefone: string;
  mensagem: string;
  example: string;
  exampleRequired: string;
};

export function Footer() {
  const [openModal, setOpenModal] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [campos, setCampos] = useState({
    name: "",
    email: "",
    orcamento: "",
    telefone: "",
    mensagem: "",
  });

  async function onSubmit(data) {
    console.log(data);
    send(data);
  }

  

  async function send(dados) {
    const api = axios.create({
      baseURL: "api/",
    });
    const { data } = await api.post("/enviarEmail", dados);
    setOpenModal(true);
  }

  return (
    <footer id="contato" className={styles.footer}>
      
      <div className={styles.container}>
      <Toast show={openModal} onClose={() => setOpenModal(!openModal)}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Contanto enviado</strong>
            <small>Até breve</small>
          </Toast.Header>
          <Toast.Body className={styles.success}>Recebemos seu contato, entraremos em contato em breve!</Toast.Body>
        </Toast>
        <h1>Contato</h1>
        <div className={styles.contact}>
          <div className={styles.information}>
            <p>
              Estamos à disposição e aguardamos seu contato. Envie-nos seu
              orçamento ou trabalhe conosco, te responderemos o mais breve
              possivel.
            </p>
            <p>
              <FaPhoneAlt color={"#baa152"} size={20} />
              (17) 3262-1257 | 
              <FaWhatsapp color={"#baa152"} size={20} className="margin-left: 20px" />
              (17) 99190-9836
            </p>
            <p>
              <FaEnvelope color={"#baa152"} size={20} />
              lfgrossimilhin@gmail.com
            </p>
            <p>
              <FaMapMarkerAlt color={"#baa152"} size={20} />
              Rua Adolfo Rodrigues, 1013 - SALA 5 Centro, - Nova Granada - SP
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Nome" {...register("name")} />
              <input type="text" placeholder="Email" {...register("email")} />
              <input
                type="text"
                {...register("orcamento")}
                placeholder="Orçamento"
              />
              <input
                type="number"
                placeholder="Telefone / Whatsapp"
                {...register("telefone")}
              />
              <textarea
                placeholder="mensagem"
                rows={5}
                {...register("mensagem")}
              ></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=5517991909836&text&app_absent=0"
          className={styles.whatsapp}
        >
          <FaWhatsapp size={50} />
        </a>
      </div>
    </footer>
  );
}
