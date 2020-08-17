import React from "react";
import Post from "@/components/Post";

import styles from "./OnlineTeam.module.css";

const features = [
  {
    icon: "/icons/contract.svg",
    title: "Profesional",
    description:
      "Psicólgos certificados en México con más de 5 años de experiencia profesional en el área clínica",
  },
  {
    icon: "/icons/shield.svg",
    title: "Segura",
    description:
      "Matenemos altos niveles de seguridad para cuidar y resguardar tu información",
  },
  {
    icon: "/icons/table.svg",
    title: "Accesible",
    description: "Psicólogia para todo aquel que lo necesite",
  },
];

const TeamFeature = ({ icon, title, description }) => (
  <div className={styles["feature"]}>
    <img
      src={icon}
      className={styles["icon"]}
      alt={`${title} - ${description}`}
    />
    <p className={styles["title"]}>{title}</p>
    <p className={styles["description"]}>{description}</p>
  </div>
);

const OnlineTeam = () => (
  <Post title="Ayuca psicológica confiable">
    <div className={styles["online-team-container"]}>
      <ul className={styles["features"]}>
        {features.map((feature, index) => (
          <li key={index}>
            <TeamFeature {...feature} />
          </li>
        ))}
      </ul>
    </div>
  </Post>
);

export default OnlineTeam;
