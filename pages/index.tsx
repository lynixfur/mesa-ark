import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'

const header_style = {
  backgroundImage: `url('https://cdn.discordapp.com/attachments/885607142051184700/1038809209967489074/image.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const header_style_2 = {
  backgroundImage: `url('https://cdn.discordapp.com/attachments/936650179812147201/1038860551587102820/Imian5_Season_8_poster_1.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const Home = () => (
    <div className="">
      <Head>
        <title>MesaARK</title>
      </Head>
      <div className="flex flex-col h-screen">
      <Navbar links={null}/>
      

      <div className="header h-full">
        <div className="inner-header h-full" style={header_style}>
      <div className="w-full h-full bg-mesa-gray bg-opacity-60">
   <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
      <div className="my-auto flex justify-center w-full">
         <div>
            <div className="container flex flex-col items-center py-12 sm:py-12">
               <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                  <div className="flex justify-center"><img alt="Bloody ARK Logo" className="h-32" src="images/MESA_Icon.png" /></div>
                  <p className="mt-5 sm:mt-5 lg:w-10/12 text-gray-300 font-semibold text-center text-md sm:text-lg">MesaARK is a server cluster with all maps for Ark Survival Evolved.
You can find an amazing community by join our servers and discord channel.
The cluster wants to provide the experience closest to the official server.</p>
               </div>
               <div className="flex justify-center items-center space-x-3">
                  <span className="relative inline-flex hidden"><a href="https://hub.bloody-ark.com" className="inline-flex items-center  px-4 py-2 font-bold leading-6 text-md shadow rounded-full text-gray-100 bg-bred-2 transition ease-in-out duration-150"> <i className="fa-solid fa-cube m-1 mr-2 my-auto text-xl text-gray-100" /> {/* */}Access Hub</a></span>
                  <button className="mb-2 md:mb-0 bg-mesa-orange shadow-xl shadow-mesa-orange/50 px-4 py-2 tracking-wider text-white uppercase inline-flex items-center space-x-2 font-bold">
                     <div className="flex"><span className="ml-1">0 Survivors</span><i className="fa-solid fa-circle text-green-500 animate-pulse my-auto ml-2" /></div>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
        </div> 
      </div> 
      </div>

      <section className="py-10">
        <h2 className="font-extrabold uppercase text-mesa-gray text-4xl pb-5 text-center">We have <span className="text-mesa-orange">CROSS-PLATFORM</span> Clusters!</h2>
        <p className="text-center font-bold">Whether You enjoy <span className="text-green-600">XBOX</span> or <span className="text-mesa-blue">PC</span> you can play at the comfort of your battle station on Mesa ARK! Visit our Clusters!</p>
        <div className="px-20 flex justify-center mt-5">
          <div className="grid grid-cols-2 gap-4 w-[50%]">
            <div className="bg-mesa-gray shadow-xl shadow-mesa-orange/70 p-5">
              <h2 className="text-xl text-mesa-orange font-extrabold text-center">PC CLUSTER</h2>
              <p className="text-md text-white text-center font-bold my-10">
              4 Man <br />
              Cave Changes <br />
              Stable Host <br />
              Daily Events <br />
              Competitive Settings<br/>

              </p>
            </div>
            <div className="bg-mesa-gray shadow-lg shadow-mesa-blue/70 p-5">
            <h2 className="text-xl text-mesa-blue font-extrabold text-center">XBOX CLUSTER</h2>

              <p className="text-md text-white text-center font-bold my-10">
                Coming Soon!<br /><br />
                <br /><br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mesa-gray text-white">
        <div className="px-40 py-20 bg-mesa-gray">
          <div className="">
          <h2 className="font-extrabold uppercase text-mesa-blue text-4xl pb-5">About Mesa ARK</h2>
          <p>
            Welcome to Mesa ARK, The perfect Ark: Survival Evolved experience. <br />
            This server was  established in 2021 and is still running strong as one of the biggest unofficial ark communities. <br />
            The server is fitted with plugins made to improve the quality of life on Ark making things easier and more enjoyable.
          </p>
          </div>
          <div className="pt-5 text-right">
            <h2 className="font-extrabold uppercase text-mesa-orange text-4xl pb-5">Why play on Mesa ARK?</h2>
            <p>
            Mesa ARK features an incredibly large, active community that can be seen in our  Discord server or in-game. <br />
            Our Servers have unique features that can only be found here, such as, Tribe Ranks and more. <br />
            Mesa ARK has a 24/7 dedicated support team that answers every question you may have and does its best to help you reach the solutions you are looking for.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <h2 className="font-extrabold uppercase p-5 text-mesa-gray text-4xl text-center">Get More ArkPoints and Support the Community</h2>
        <p className="text-center font-bold">
          Discover our Vip Plan Membership and get more points and stuff in-game! <br />
          Every donation or buy on the shop is devolved to grow the community! <br />
        </p>
        <div className="flex justify-center">
          <button className="mt-5 mb-2 md:mb-0 bg-mesa-blue shadow-xl shadow-mesa-blue/50 px-4 py-2 tracking-wider text-white uppercase inline-flex items-center space-x-2 font-bold">
            <div className="flex"><span className="ml-1">VISIT THE SHOP</span><i className="fa-solid fa-circle text-green-500 animate-pulse my-auto ml-2" /></div>
          </button>
        </div>
      </section>

      <section className="bg-mesa-gray h-64"  style={header_style_2}>
        <div className="w-full h-full bg-mesa-gray bg-opacity-80 p-10">
          <h2 className="font-extrabold uppercase p-5 text-white text-4xl text-center">Join Our Community</h2>
          <div className="flex justify-center w-full mt-5">
            <a href="https://discord.gg/bloody" className="h-[70px] w-72 relative">
              <img className="object-cover shadow-xl" src="https://discordapp.com/api/guilds/889440747529568316/widget.png?style=banner2&w=1080&q=75"/>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
  <h2 className="font-extrabold uppercase p-5 pl-0 text-mesa-gray text-4xl">Frequently Asked Questions</h2>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div className="mb-10">
                  <h2 className="flex items-center mb-4 text-lg font-extrabold uppercase text-mesa-gray">
                      Can I build on Artifact cave?
                  </h2>
                  <p className="text-gray-700">In order to create a ticket, join our discord server go to #contact-support channel and react to the envelope emoji to open a ticket. A conversation will be opened between you and the admin team. Please do not contact members of the admin team directly.</p>
              </div>
              <div className="mb-10">                        
                  <h2 className="flex items-center mb-4 text-lg font-extrabold uppercase text-mesa-gray">
                  Do Admins play on the server? What are the rules for Admins that are playing?
                  </h2>
                  <p className="text-gray-700">Sometimes Admins are playing on our cluster. We’re only allowed to use Admin cheats for support cases. Admins are also not allowed to make decisions that target their own tribe and have to make a ticket as if they are a normal player.</p>
              </div>
          </div>
          <div>
              <div className="mb-10">
              <h2 className="flex items-center mb-4 text-lg font-extrabold uppercase text-mesa-gray">
                    What about Cryo sickness?
                  </h2>
                  <p className="text-gray-700">Our team is doing its best to provide quick support. But we all have jobs and families aswell and are doing our support work in our freetime. We also don’t work with “first come first serve”. We have a priority system for our tickets so topics that need immediate support will be worked on first.
<br /><br />
Note:<br />

– DM’ing any Admin about a Ticket won’t get you faster support.<br />

– Tagging Admins in discord won’t get you faster support.<br />

– Donations won’t get you faster support.<br /></p>
              </div>
              <div className="mb-10">
              <h2 className="flex items-center mb-4 text-lg font-extrabold uppercase text-mesa-gray">
              I got banned, what can I do?
                  </h2>
                  <p className="text-gray-700">If you got banned you can open a ticket on our support page. Sometimes when a player can’t be reached via ingame chat or discord we will issue a temporary ban to get their attention.</p>
              </div>
          </div>
      </div>
  </div>
</section>

      <footer className="bg-mesa-gray body-font bg-bgray-secondary">
   <div className="bg-bgray-overlay">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
         <p className="text-white text-sm uppercase font-bold text-center sm:text-left">Copyright © 2022 Mesa ARK. All Rights Reserved. <span>Designed by Lynix</span></p>
      </div>
   </div>
</footer>

    </div>
)

export default Home
