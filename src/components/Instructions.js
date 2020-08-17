import React, { Fragment } from "react";

import Post from "@/components/Post";

import styles from "./Instructions.module.css";

const Instructions = () => (
  <Fragment>
    <Post title="Agenda tu cita" className={styles["instructions"]}>
      <ol className={styles["list"]}>
        <li className={styles["item"]}>
          Deposita al:
          <ul>
            <li>Número de cuenta 15 67 20 11 87 ó</li>
            <li>Número de tarjeta 4152 3136 4312 1929 BBVA</li>
            <li>A nombre de Diana Marisol Solis Cruz.</li>
          </ul>
        </li>
        <li className={styles["item"]}>
          Toma foto a tu comprobante de pago y envialo mediante WhatsApp o
          correo electrónico.
        </li>
        <li className={styles["item"]}>
          Disfruta de tu sesión ¡mediante la plataforma que elijas! (WhatsApp,
          Zoom, Meet)
        </li>
      </ol>
    </Post>

    <Post title="Dinos cómo ayudarte">
      <p>
        <a
          className={styles["links"]}
          target="_blank"
          href="mailto:psic.dianasolis@gmail.com"
        >
          psic.dianasolis@gmail.com
        </a>
      </p>
      <p>
        <a className={styles["links"]} target="_blank" href="tel:5570602954">
          5570602954
        </a>
      </p>
      <p>
        <a
          className={styles["links"]}
          target="_blank"
          href="https://wa.me/5570602954"
        >
          WhatsApp
        </a>
      </p>
    </Post>
  </Fragment>
);

export default Instructions;
