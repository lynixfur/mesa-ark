import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const header_style = {
  backgroundImage: `url('/bg.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const header_style_2 = {
  backgroundImage: `url('/shop.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'top'
}

const Home = ({player_count}: any) => (
    <div className="">
      <Head>
        <title>MESArk</title>
      </Head>
      <div className="flex flex-col h-screen">
      <Navbar links={null}/>
      

      <div className="header h-full">
        <div className="inner-header h-full" style={header_style}>
      <div className="w-full h-full bg-bgray-bg bg-opacity-60">
   <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
      <div className="my-auto flex justify-center w-full">
         <div>
            <div className="container flex flex-col items-center py-12 sm:py-12">
               <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                  <div className="flex justify-center"><img alt="Bloody ARK Logo" className="h-64" src="/asa.webp" /></div>
                  <p className="mt-5 sm:mt-5 lg:w-10/12 text-gray-300 font-semibold text-center text-md sm:text-lg">MESArk provides the most competitive and fun Ark Survival Ascended experience for both high rate and low rate players, while keeping the game as close as possible to a vanilla feel. We prioritize competition, server performance, and high amount of players each wipe. Thank you for choosing MESArk and checkout the rest of the website for more information!</p>
               </div>
               <div className="flex justify-center items-center space-x-3">
                  <span className="relative inline-flex hidden"><a href="https://hub.bloody-ark.com" className="inline-flex items-center  px-4 py-2 font-bold leading-6 text-md shadow rounded-full text-gray-100 bg-bred-2 transition ease-in-out duration-150"> <i className="fa-solid fa-cube m-1 mr-2 my-auto text-xl text-gray-100" /> {/* */}Access Hub</a></span>
                  <button className="mb-2 md:mb-0 bg-bgray-secondary border border-gray-600 shadow-md px-4 py-2 tracking-wider text-white uppercase inline-flex items-center space-x-2 font-bold">
                     <div className="flex"><span className="ml-1">{player_count.players} Survivors</span><i className="fa-solid fa-server text-red-600 animate-pulse my-auto ml-2" /></div>
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

      
      <section className="h-[500px]" style={header_style_2}>
      <div className="w-full h-full bg-bgray-bg bg-opacity-80">
        <div className="w-full h-full flex justify-center items-center">
          <div>
          <div className="flex justify-center mb-5">
          <a href="https://shop.mesa-ark.com" className="mt-5 mb-2 md:mb-0 bg-bgray-secondary border border-gray-600 rounded-full shadow-md px-4 py-2 tracking-wider text-white uppercase inline-flex items-center space-x-2 font-bold">
            <div className="flex"><span className="">VISIT THE SHOP</span></div>
          </a>
        </div>
        <h2 className="font-extrabold uppercase p-5 text-mesa-orange text-4xl text-center hidden">Get your MVP Rank right now and Support the Community</h2>
        <p className="text-center font-bold text-white">
          Discover our MVP Membership and get few benefits and stuff in-game! <br />
          Every donation or buy on the shop is devolved to grow the community! <br />
        </p>
        </div>
        </div>
        </div>
      </section>

      <section className="sm:p-10 p-5 bg-mesa-bg">
        <div className="w-full h-full flex justify-center items-center">
          <div>
          <h2 className="font-extrabold uppercase p-5 text-gray-100 text-4xl text-center hidden">Join Our Community</h2>
          <div className="flex justify-center w-full mt-5">
            
            <div>
              <iframe src="https://discord.com/widget?id=915410087475019817theme=dark" width="350" height="500" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
              <a href="https://discord.gg/mesark-ascended" className="">
                <p className="text-center my-5 px-2 py-3 font-bold bg-bgray-secondary rounded-full">Join Our Discord</p>
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Footer/>

    </div>
)

export async function getServerSideProps() {
  /*try {
    const res_player_count = await fetch(
      "https://mesa-ark.com/api/player_count"
    );

    if (!res_player_count.ok) {
      console.error("An error occurred while fetching data for player count.");
    }

    const player_count = await res_player_count.json();

    // If 'players' property is not available in the response, default it to 0
    const playerCountWithFallback = {
      players: player_count?.players || 0,
    };

    return {
      props: {
        player_count: playerCountWithFallback,
      },
    };
  } catch (error) {
    // Handle the error gracefully
    console.error("An error occurred while fetching data:", error);

    return {
      props: {
        player_count: { players: 0 },
        error: "An error occurred while fetching data.",
      },
    };
  }*/
  return {
    props: {
      player_count: { players: 0 },
      error: "Data Disabled.",
    },
  };
}


export default Home
