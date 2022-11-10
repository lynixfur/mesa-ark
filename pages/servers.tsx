import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'

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

interface ServerProps { // <--- your custom page props
  servers: any
}

const ServerList = ({servers}: ServerProps) => (
    <div className="">
      <Head>
        <title>MesaARK</title>
      </Head>
      <Navbar links={null}/>
      
      <section className="h-[900px] p-10">

      <h2 className="font-extrabold uppercase text-mesa-gray text-4xl mb-5">SERVER LIST TEST</h2>

        <button className="mb-2 md:mb-0 bg-mesa-orange shadow-xl shadow-mesa-orange/50 px-4 py-2 tracking-wider text-white uppercase inline-flex items-center space-x-2 font-bold">
            <div className="flex"><span className="ml-1">Reload</span><i className="fa-solid fa-circle text-green-500 animate-pulse my-auto ml-2" /></div>
        </button>
    
      </section>

      <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {servers.map((server: any) => (
          <p>{server.name} - {server.connection_url.replace("steam://connect/","")}</p>
        ))}
      </div>


      <footer className="bg-mesa-gray body-font w-full">
   <div className="bg-bgray-overlay">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
         <p className="text-white text-sm uppercase font-bold text-center sm:text-left">Copyright © 2022 Mesa ARK. All Rights Reserved. <span>Designed by Lynix</span></p>
      </div>
   </div>
</footer>

    </div>
)

export async function getServerSideProps() {
  console.log("[ShadowmaneAPI] DEBUG: Fetched Server List");

  const servers_res = await fetch(
    "https://mesa-ark.com/api/servers"
  );


 var servers = await servers_res.json();
 console.log(servers);

  return {
    props: {
      servers,
    },
  };
}

export default ServerList
