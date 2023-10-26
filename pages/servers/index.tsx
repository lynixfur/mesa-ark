import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import ServerCard from '../../components/Cards/ServerCard'
import Footer from '../../components/Footer'
import {useState} from "react";

const header_style = {
    backgroundImage: `url('https://cdn.discordapp.com/attachments/936650179812147201/1038805384846127224/Imian_Poster_Design_No_logo_1.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const header_style_2 = {
    backgroundImage: `url('https://cdn.discordapp.com/attachments/936650179812147201/1038860551587102820/Imian5_Season_8_poster_1.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const ServerList = () => {

    const [activeTab, setActiveTab] = useState(4);
    const changeCluster = (clusterId: number) => setActiveTab(clusterId);

    return (
        <div className="">
        <Head>
            <title>MESArk</title>
        </Head>
        <Navbar links={null}/>

        <section className="min-h-[900px] p-10 bg-bgray-bg">

            <h2 className="font-extrabold text-white uppercase text-4xl mb-5">
                <i className="fa-solid fa-server"></i> SERVERS
            </h2>
            <div className="flex space-x-1">
                <button
                    onClick={() => {changeCluster(4)}}
                    className={`bg-bgray-overlay hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-5 ${activeTab === 4 ? 'text-orange-600' : ''}`}
                >
                    <i className="fa-solid fa-server"></i> 4 Man Cluster
                </button>
                <button
                    onClick={() => {changeCluster(3)}}
                    className={`bg-bgray-overlay hover:bg-bgray-secondary transition-colors w-full text-white font-bold py-2 px-5 ${activeTab === 3 ? 'text-orange-600' : ''}`}
                >
                    <i className="fa-solid fa-server"></i> 3 Man Cluster
                </button>
            </div>

            <h3 className="font-extrabold uppercase text-white text-4xl my-5"><i className="fa-solid fa-circle-question"></i> Having trouble joining?</h3>
            <p className="mb-5 text-base text-gray-100 sm:text-lg text-left">We can help you! Follow this simple step-by-step guide to get started.</p>
            <p className="mb-5 text-gray-300 sm:text-lg text-left">
                Step 1: Open Steam and click on view and then servers<br />
                Step 2: Click on favorites tab and then add a server<br />
                Step 3: Enter the following Server IP below then click add this address to favorites<br />
                Step 4: Start Ark Survival and click Join ARK<br />
                Step 5: Filter for favorites and ensure all other filters are reset<br />
                Step 6: The server should now visible for you!!<br />
            </p>

            <p className={'text-xl py-5 text-zinc-400'}>
                <span className={'text-orange-600'}><i className="fa-solid fa-triangle-exclamation"></i></span> We encountered difficulties in retrieving the server list.
            </p>

            <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {/*{servers.length == 0 && <h1 className="text-white">There&apos;s currently no servers online!</h1>}
                {servers.map((server: any) => (
                    <ServerCard key={server?.id} server={server}/>
                ))}*/}
            </div>

        </section>


        <Footer/>

    </div>)
}
export default ServerList;

