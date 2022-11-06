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

const DevInfo = () => (
    <div className="">
      <Head>
        <title>MesaARK</title>
      </Head>
      <Navbar links={null}/>
      
      <section className="h-[900px] p-10">

      <h2 className="font-extrabold uppercase text-mesa-gray text-4xl mb-5">DEVINFO - DEBUG MESA ARK (WEB)</h2>
        <p className="font-bold mb-5">
          Version # : v0.0.17 <br />
          NextJS Version : 13 <br />
          Docker Ready : True <br />
          Docker : False <br />
          MySQL Connected : <span className="text-red-600">Not Connected</span> <br />
          ShadeServerManager (SSM) Connected : <span className="text-red-600">Not Connected</span> <br />
        </p>

        <button className="mb-2 md:mb-0 bg-mesa-orange shadow-xl shadow-mesa-orange/50 px-4 py-2 tracking-wider text-white uppercase inline-flex items-center space-x-2 font-bold">
            <div className="flex"><span className="ml-1">Speed Test</span><i className="fa-solid fa-circle text-green-500 animate-pulse my-auto ml-2" /></div>
        </button>

        <br />

        <button className="mt-5 mb-2 md:mb-0 bg-mesa-blue shadow-xl shadow-mesa-blue/50 px-4 py-2 tracking-wider text-white uppercase inline-flex items-center space-x-2 font-bold">
            <div className="flex"><span className="ml-1">DEBUG</span><i className="fa-solid fa-circle text-green-500 animate-pulse my-auto ml-2" /></div>
        </button>
    
      </section>


      <footer className="bg-mesa-gray body-font w-full">
   <div className="bg-bgray-overlay">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
         <p className="text-white text-sm uppercase font-bold text-center sm:text-left">Copyright © 2022 Mesa ARK. All Rights Reserved. <span>Designed by Lynix</span></p>
      </div>
   </div>
</footer>

    </div>
)

export default DevInfo
