import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import ServerCard from '../components/cards/ServerCard'
import Footer from '../components/sections/footer'

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
        <title>MESArk</title>
      </Head>
      <Navbar links={null}/>
      
      <section className="min-h-[900px] p-10">

      <h2 className="font-extrabold uppercase text-mesa-gray text-4xl mb-5">SERVERS</h2>

        <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-5">
          {servers.lenght == 0 && <h1 className="text-black">There's currently no servers online!</h1>}
          {servers.map((server: any) => (
            <ServerCard server={server}/>
          ))}
        </div>
    
      </section>


      <Footer/>

    </div>
)

export async function getServerSideProps() {
  console.log("[ShadowmaneAPI] DEBUG: Fetched Server List");

  const servers_res = await fetch(
    "https://mesa-ark.com/api/servers"
  );


 var servers = await servers_res.json();

  return {
    props: {
      servers,
    },
  };
}

export default ServerList
