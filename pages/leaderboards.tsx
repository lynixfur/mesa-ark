import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/navbar";
import useSWR from "swr";
import axios from "axios";
import Footer from '../components/sections/footer'

/* Leaderboard Components */
import TribeLeaderboard from "../components/leaderboards/TribeLeaderboard";
import PlayerLeaderboard from "../components/leaderboards/PlayerLeaderboard";

const Leaderboards = () => {

  /* Tabs */
  const [activeTab, setActiveTab] = useState(0);

  const changeToTribe = () => setActiveTab(0);
  const changeToPlayer = () => setActiveTab(1);

  return (
    <div className="">
      <Head>
        <title>MESArk</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Navbar links={null} />

      <section className="sm:p-5 p-10 bg-mesa-black min-h-screen">
        <h2 className="font-extrabold text-white uppercase text-4xl mb-5">
          <i className="fa-solid fa-trophy"></i> LEADERBOARDS
        </h2>
        <div className="flex space-x-3">
          <button onClick={changeToTribe} className="bg-mesa-orange w-full text-white font-bold py-2 px-5">Tribe Leaderboard</button>
          <button onClick={changeToPlayer} className="bg-mesa-orange w-full text-white font-bold py-2 px-5">Player Leaderboard</button>
        </div>

        {activeTab == 0 &&
          <TribeLeaderboard />
        }
        {activeTab == 1 &&
          <PlayerLeaderboard />
        }

      </section>

      <Footer />
    </div>
  );
};

export default Leaderboards;
