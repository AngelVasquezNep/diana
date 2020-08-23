import React from "react";
import Head from "next/head";

const SEO_TAGS = [
  {
    type: "HOME",
    title: "Psicóloga Diana Solís",
    description:
      "Soy una profesional de la psicología con muchos años de experiencia, me he especializado en diversas áreas de la salud y junto con un equipo de expertos contamos con todas las herramientas necesarias para apoyarte con lo que necesites.",
    tags: [
      {
        property: "og:title",
        content: "Psicóloga Diana Solís",
      },
      {
        property: "og:description",
        content:
          "Soy una profesional de la psicología con muchos años de experiencia, me he especializado en diversas áreas de la salud y junto con un equipo de expertos contamos con todas las herramientas necesarias para apoyarte con lo que necesites.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: "cover.jpg",
        itemprop:"image",
      },
      {
        property: "og:url",
        content: "https://midianasolis.now.sh/",
      },
    ],
  },
];

const SEO = ({ type }) => {
  const { title, description, tags } = SEO_TAGS.find(
    seoTag => seoTag.type === type
  );

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      {tags.map(({ property, content, ...rest }) => (
        <meta key={property} property={property} content={content} {...rest}/>
      ))}
    </Head>
  );
};

export default SEO;
