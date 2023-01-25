import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../../libs/fetcher";

const PlayerLeaderboard = () => {

    /* Search Box */
    const [search, setSearch] = useState('');
    const [debounceSearch, setdebounceSearch] = useState('');
    const handleOnChange = useCallback(({ target: { value } }: any) => {
        setSearch(value);
    }, []);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setdebounceSearch(search);
        }, 250);

        return () => {
            clearTimeout(timerId);
        };
    }, [search]);

    /* Cluster Dropdown */
    const [clusterDropdown, setClusterDropdown] = useState(false);
    const handleClusterDropdown = () => setClusterDropdown(!clusterDropdown);


    /* Cluster Filter */
    const [clusterUrl, setClusterUrl] = useState(`/api/ark/4man/player_rankings`);
    const [clusterFilter, setClusterFilter] = useState(0);
    const handlePrimaryCluster = () => setClusterFilter(0);
    const handleSecondaryCluster = () => setClusterFilter(1);

    useEffect(() => {
        const timerId = setTimeout(() => {
          if(clusterFilter == 1) {
            setClusterUrl(`/api/ark/6man/player_rankings`)
            setClusterDropdown(false)
          } else {
            setClusterUrl(`/api/ark/4man/player_rankings`)
            setClusterDropdown(false)
          }
          console.log(clusterUrl)
        }, 250);
        
        return () => {
          clearTimeout(timerId);
        };
    }, [clusterFilter]);

    /* Get Data */

    const { data, error }: any = useSWR(`${clusterUrl}?search=${debounceSearch}`, fetcher)

    var ranking_players: any[] = [];

    data?.ranking_data.forEach((player: any) => {
        // Add KD Value
        if (parseInt(player?.DeathByPlayer) === 0) {
            player.kd = parseInt(player?.PlayerKills).toFixed(1); // This line prevents Infinity KD Issue
        } else {
            player.kd = (player?.PlayerKills / player?.DeathByPlayer).toFixed(1);
        }
        // Add to New List
        ranking_players.push(player);
    })

    ranking_players.sort(function (a, b) {
        return parseFloat(b.kd) - parseFloat(a.kd);
    });

    return (<>
        <h2 className="font-extrabold text-mesa-orange uppercase text-xl mt-5">
            Player Leaderboards
        </h2>
        {/* Filters */}
        <div className="my-2 flex space-x-4 items-center">
            <input value={search}
                onChange={handleOnChange}
                placeholder="Search for Players" name="tribe_search" id="tribe_search" className="px-3 py-2 text-gray-300 bg-mesa-gray w-1/2 border-gray-500 border" />

            <div className="relative">
                <button onClick={handleClusterDropdown} className="px-3 py-2 text-white bg-mesa-orange font-bold">
                    {clusterDropdown
                        ? <>Cluster: {clusterFilter == 0 && "4"} {clusterFilter == 1 && "6"} Man <i className="ml-1 fa-solid fa-angle-up"></i></>
                        : <>Cluster: {clusterFilter == 0 && "4"} {clusterFilter == 1 && "6"} Man <i className="ml-1 fa-solid fa-angle-down"></i></>
                    }
                </button>
                <div className={clusterDropdown ? 'absolute z-50 mt-3 w-48 shadow-lg origin-top-left left-0' : 'hidden z-50 mt-3 w-48 shadow-lg origin-top-left left-0'}>
                    <div className="ring-1 ring-black ring-opacity-5 py-1 bg-mesa-dropdown">
                        <button onClick={handlePrimaryCluster} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-100 hover:bg-mesa-gray focus:outline-none focus:bg-mesa-gray transition duration-150 ease-in-out">4 Man Cluster</button>
                        <button onClick={handleSecondaryCluster} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-100 hover:bg-mesa-gray focus:outline-none focus:bg-mesa-gray transition duration-150 ease-in-out">6 Man Cluster</button>
                    </div>
                </div>
            </div>
        </div>
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
                                            <tr className="focus:outline-none h-12 border-t border-b-[1px] border-mesa-black bg-mesa-orange">
                                                <td className={search ? "hidden" : "pl-5"}>
                                                    <div className="flex items-center">
                                                        <p className="text-base leading-none text-white font-bold uppercase">
                                                            Rank
                                                        </p>
                                                    </div>
                                                </td>
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
                                                    <tr key={player?.PlayerName} className="focus:outline-none h-12 border-t border-b-[1px] border-mesa-black bg-mesa-gray">
                                                        <td className={search ? "hidden" : "pl-5"}>
                                                            <div className="flex items-center">
                                                                <p className="text-base leading-none text-white font-bold">
                                                                    {rank + 1}
                                                                </p>

                                                                {/* Tribe Ranking Trophy */}
                                                                {(() => {
                                                                    switch (rank) {
                                                                        case 0:
                                                                            return <p className="ml-1" style={{ color: '#ffd700' }}><i className="fa-solid fa-trophy"></i></p>;
                                                                        case 1:
                                                                            return <p className="ml-1" style={{ color: '#C0C0C0' }}><i className="fa-solid fa-trophy"></i></p>;
                                                                        case 2:
                                                                            return <p className="ml-1" style={{ color: '#977b29' }}><i className="fa-solid fa-trophy"></i></p>;
                                                                        default:
                                                                            return null;
                                                                    }
                                                                })()}
                                                            </div>
                                                        </td>
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
                    <div>
                        <div className="text-gray-700 px-4 py-3 mt-10" role="alert">
                            <div className="">
                                <div className="my-auto flex justify-center mb-5">
                                    <i className="fa-solid fa-spinner text-mesa-orange text-5xl animate-spin"></i>
                                </div>
                                <div>
                                    <p className="font-bold text-2xl text-center text-mesa-orange uppercase">
                                        LOADING
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    </>)
}

export default PlayerLeaderboard