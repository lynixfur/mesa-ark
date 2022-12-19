import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/navbar";
import useSWR from "swr";
import axios from "axios";
import Footer from '../components/sections/footer'

const header_style = {
  backgroundImage: `url('https://cdn.discordapp.com/attachments/936650179812147201/1038805384846127224/Imian_Poster_Design_No_logo_1.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const header_style_2 = {
  backgroundImage: `url('https://cdn.discordapp.com/attachments/936650179812147201/1038860551587102820/Imian5_Season_8_poster_1.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const Leaderboards = () => {
  /* Get Page */
  const router = useRouter();

  /* Filters */
  const page = router.query.page ? router.query.page : 0;
  const search = router.query.search ? router.query.search : "";
  const sorted_by = router.query.sort ? router.query.sort : "PlayerKills";

  const [filterMenu, setFilterMenu] = useState(false);
  const handleFilterDropdown = () => setFilterMenu(!filterMenu);

  /* Fetch Data */
  const address = `/api/ark/player_rankings?page=${page}&search=${search}&sort_by={"${sorted_by}":"desc"}`;
  const fetcher = async (url: any) =>
  await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  /* Sort by KD */
  var ranking_players: any[] = [];

  data?.ranking_data.forEach((player: any) => {
    // Add KD Value
    if(parseInt(player?.DeathByPlayer) === 0) {
      player.kd = parseInt(player?.PlayerKills).toFixed(1); // This line prevents Infinity KD Issue
    } else {
      player.kd = (player?.PlayerKills / player?.DeathByPlayer).toFixed(1);
    }
    // Add to New List
    ranking_players.push(player);
  })

  ranking_players.sort(function(a, b) {
    return parseFloat(b.kd) - parseFloat(a.kd);
  });

  const address_tribe = `/api/ark/tribe_rankings?page=${page}`;
  const fetcher_tribe = async (url: any) =>
  await axios.get(url).then((res) => res.data);
  const { data: tribe_data, error: tribe_error } = useSWR(address_tribe, fetcher_tribe);

  /*if (error) {
    return <p className="p-5">Loading failed!</p>;
  }
  if (!data) {
    return <p className="p-5">Loading...</p>;
  }*/

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

      <section className="p-10 bg-mesa-black">
      <h2 className="font-extrabold uppercase text-mesa-gray text-4xl mb-5">
          TRIBE DAMAGE
        </h2>
        {/* Table */}
        <div className="pb-12">
          {data ? (
            <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
              <div>
                <div className="mb-10">
                  <div className="overflow-x-auto">
                    <table
                      className="w-full whitespace-nowrap"
                      v-if="$page.props.stats != null"
                    >
                      <tbody>
                        <tr className="focus:outline-none h-12 border-t border-b-[1px] border-gray-200 bg-mesa-orange">
                          {page == 0 ? (
                            <td className="pl-5">
                              <div className="flex items-center">
                                <p className="text-base leading-none text-white font-bold uppercase">
                                  Rank
                                </p>
                              </div>
                            </td>
                          ) : (
                            <></>
                          )}
                          <td className="pl-5">
                            <div className="flex items-center">
                              <p className="text-base leading-none text-white font-bold uppercase">
                                Tribe Name
                              </p>
                            </div>
                          </td>
                          <td className="pl-5">
                            <div className="flex items-center">
                              <p className="text-base leading-none text-white font-bold uppercase">
                                Tribe Damage
                              </p>
                            </div>
                          </td>
                        </tr>
                        {tribe_data?.ranking_data?.map((tribe: any, rank: any) => {
                          return (
                            <tr key={tribe?.TribeName} className="focus:outline-none h-12 border-t border-b-[1px] border-gray-200 bg-mesa-gray">
                              {page == 0 ? (
                                <td className="pl-5">
                                  <div className="flex items-center">
                                    <p className="text-base leading-none text-white font-bold">
                                      {rank + 1}
                                    </p>
                                  </div>
                                </td>
                              ) : (
                                <></>
                              )}
                              <td className="pl-5">
                                <div className="flex items-center">
                                  <p className="text-base leading-none text-white font-bold">
                                    {tribe?.TribeName}
                                  </p>
                                </div>
                              </td>
                              <td className="pl-5">
                                <div className="flex items-center">
                                  <p className="text-base leading-none text-white font-bold">
                                    {tribe?.DamageScore}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-gray-700 px-4 py-3 mt-10" role="alert">
              <div className="">
                <div className="my-auto flex justify-center mb-5">
                  <i className="fa-solid fa-clock-rotate-left text-5xl text-mesa-orange" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-center text-mesa-orange uppercase">
                    No data available!
                  </p>
                  <p className="text-lg text-black uppercase font-bold mt-2 text-center">
                    We need to wait for the rankings to be recorded.
                    <br />
                    Please check back later.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <h2 className="font-extrabold uppercase text-mesa-gray text-4xl mb-5">
          LEADERBOARDS
        </h2>

        {/* Table */}
        <div className="pb-12">
          {data ? (
            <>
            <div className="text-gray-700 px-4 py-3 mt-10 hidden" role="alert">
              <div className="">
                <div className="my-auto flex justify-center mb-5">
                  <i className="fa-solid fa-triangle-exclamation text-5xl text-mesa-orange" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-center text-mesa-orange uppercase">
                    Player Rankings Disabled
                  </p>
                  <p className="text-lg text-black uppercase font-bold mt-2 text-center">
                    We are noticing an issue with our new KD system.<br />
                    Some players have Infinity KD, Impressive!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
              <div>
                <div className="mb-10">
                  <div className="overflow-x-auto">
                    <table
                      className="w-full whitespace-nowrap"
                      v-if="$page.props.stats != null"
                    >
                      <tbody>
                        <tr className="focus:outline-none h-12 border-t border-b-[1px] border-gray-200 bg-mesa-orange">
                          {page == 0 ? (
                            <td className="pl-5">
                              <div className="flex items-center">
                                <p className="text-base leading-none text-white font-bold uppercase">
                                  Rank
                                </p>
                              </div>
                            </td>
                          ) : (
                            <></>
                          )}
                          <td className="pl-5">
                            <div className="flex items-center">
                              <p className="text-base leading-none text-white font-bold uppercase">
                                Player Name
                              </p>
                            </div>
                          </td>
                          <td className="pl-5">
                            <div className="flex items-center">
                              <p className="text-base leading-none text-white font-bold uppercase">
                                Tribe Name
                              </p>
                            </div>
                          </td>
                          <td className="pl-5">
                            <div className="flex items-center">
                              <p className="text-base leading-none text-white font-bold uppercase">
                                Play Time
                              </p>
                            </div>
                          </td>
                          <td className="pl-5">
                            <div className="flex items-center">
                              <p className="text-base leading-none text-white font-bold uppercase">
                                Player Kills
                              </p>
                            </div>
                          </td>
                          <td className="pl-5">
                            <div className="flex items-center">
                              <p className="text-base leading-none text-white font-bold uppercase">
                                Player Deaths
                              </p>
                            </div>
                          </td>
                          <td className="pl-5">
                            <div className="flex items-center">
                              <p className="text-base leading-none text-white font-bold uppercase">
                                Tamed Dinos Kills
                              </p>
                            </div>
                          </td>
                          <td className="pl-5">
                            <div className="flex items-center">
                              <p className="text-base leading-none text-white font-bold uppercase">
                                KD
                              </p>
                            </div>
                          </td>
                        </tr>
                        {ranking_players?.map((player: any, rank: any) => {
                          return (
                            <tr key={player?.PlayerName} className="focus:outline-none h-12 border-t border-b-[1px] border-gray-200 bg-mesa-gray">
                              {page == 0 ? (
                                <td className="pl-5">
                                  <div className="flex items-center">
                                    <p className="text-base leading-none text-white font-bold">
                                      {rank + 1}
                                    </p>
                                  </div>
                                </td>
                              ) : (
                                <></>
                              )}
                              <td className="pl-5">
                                <div className="flex items-center">
                                  <p className="text-base leading-none text-white font-bold">
                                    {player?.PlayerName}
                                  </p>
                                </div>
                              </td>
                              <td className="pl-5">
                                <div className="flex items-center">
                                  <p className="text-base leading-none text-white font-bold">
                                    {player?.TribeName}
                                  </p>
                                </div>
                              </td>
                              <td className="pl-5">
                                <div className="flex items-center">
                                  <p className="text-base leading-none text-white font-bold">
                                    {player?.PlayTime
                                      ? (
                                          parseInt(player?.PlayTime) / 60
                                        ).toFixed(2)
                                      : 0}{" "}
                                    hrs
                                  </p>
                                </div>
                              </td>
                              <td className="pl-5">
                                <div className="flex items-center">
                                  <p className="text-base leading-none text-white font-bold">
                                    {player?.PlayerKills}
                                  </p>
                                </div>
                              </td>
                              <td className="pl-5">
                                <div className="flex items-center">
                                  <p className="text-base leading-none text-white font-bold">
                                    {player?.DeathByPlayer}
                                  </p>
                                </div>
                              </td>
                              <td className="pl-5">
                                <div className="flex items-center">
                                  <p className="text-base leading-none text-white font-bold">
                                    {player?.DinoKills}
                                  </p>
                                </div>
                              </td>
                              <td className="pl-5">
                                <div className="flex items-center">
                                  <p className="text-base leading-none text-white font-bold">
                                    {player?.kd}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            </>
          ) : (
            <div className="text-gray-700 px-4 py-3 mt-10" role="alert">
              <div className="">
                <div className="my-auto flex justify-center mb-5">
                  <i className="fa-solid fa-clock-rotate-left text-5xl text-mesa-orange" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-center text-mesa-orange uppercase">
                    No data available!
                  </p>
                  <p className="text-lg text-black uppercase font-bold mt-2 text-center">
                    We need to wait for the rankings to be recorded.
                    <br />
                    Please check back later.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

      </section>

      <Footer/>
    </div>
  );
};

export default Leaderboards;
