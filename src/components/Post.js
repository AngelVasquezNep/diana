import React from "react";

import styles from "./Post.module.css";

const Post = ({ title, children }) => (
  <article className={styles["post"]}>
    <h3 className={styles["post-title"]}>{title}</h3>
    <div className={styles["post-content"]}>{children}</div>
  </article>
);

export const Posts = () => (
  <section>
    <Post title="¿Qué es la psicoterapia?">
      <p>
        La psicoterapia es un proceso de colaboración basado en la relación de
        una persona y un psicólogo. Como su base fundamental es el diálogo, esta
        te proporcionará un ambiente de apoyo que te permitirá hablar
        abiertamente con alguien objetivo, neutral e imparcial.
      </p>
      <p>
        Tu psicólogo y tú trabajarán juntos para identificar y cambiar los
        patrones de pensamiento y comportamiento que te impiden sentirte bien.
      </p>

      <p>
        Al concluir este proceso, no sólo habrás resuelto el problema que te
        trajo a la consulta, sino que, además, habrás aprendido nuevas destrezas
        para enfrentar con mayor efectividad cualquier desafío que pueda surgir
        en el futuro.
      </p>
    </Post>
    <Post title="¿Cuándo debo considerar la psicoterapia como una opción?">
      <p>
        Algunas personas recurren a la psicoterapia porque han estado deprimidas,
        ansiosas o enojadas por demasiado tiempo. Otras podrían querer ayuda
        ante una enfermedad crónica que interfiere en su bienestar emocional o
        físico. Y otras podrían tener problemas a corto plazo para los que
        necesitan ayuda. Por ejemplo, un divorcio, la partida de los hijos,
        sentirse abrumado por un nuevo empleo o estar de duelo por la muerte de
        un familiar.
      </p>
    </Post>
  </section>
);

export default Post;
