import React from "react";
import Head from "next/head";

import Container from "@/layouts/Container";
import SEO from '@/components/SEO'
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import OnlineTeam from "@/components/OnlineTeam";
import { Posts } from "@/components/Post";
import Instructions from "@/components/Instructions";

const Index = () => {
  return (
    <Container>
      <main>
        <SEO type="HOME" />

        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,300;1,700&display=swap"
            rel="stylesheet"
          />


          <link rel="icon" type="image/png" href="/icons/heart.png"/>
        </Head>

        <Header />

        <Introduction />

        <Posts />

        <OnlineTeam />

        <Instructions />
      </main>
    </Container>
  );
};

export default Index;
