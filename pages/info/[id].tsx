import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import HomeHeader from "../../components/headers/homeHeader";
import axios from "axios";
import ReactMarkdown from 'react-markdown'
import Footer from "../../components/footer";

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await fetch(`http://bloody-ark.com:3000/api/wiki/${id}`);
  const list_res = await fetch(`http://bloody-ark.com:3000/api/wiki/page_list`);
  const data = await res.json();
  const list_data = await list_res.json();

  return {
    props: {
      wiki_data: data,
      page_list: list_data
    },
  };
}

function ServerList({wiki_data, page_list}) {
  return (
    <>
      <Head>
        <title>Bloody ARK - {wiki_data?.title}</title>
        <meta name="description" content="Welcome to BloodyARK, The perfect Ark: Survival Evolved experience. This server was established in 2017 and is still running strong as one of the biggest unofficial ark communities."/>
        <meta name="keywords" content="BloodyARK,ARK,Dinosaurs,PVPVE,Best ARK Server,BloodyHub,BloodyShop,Evolve or Die"/>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Navbar darken={true}/>

      <div className="pt-[72px] w-full">
  <div className="h-full w-full" style={{background: 'url(' + wiki_data?.bg_image + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <div className="w-full h-full bg-bgray-bg bg-opacity-70">
      <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
        <div className="my-auto flex justify-center w-full">
          <div>
            <div className="container flex flex-col items-center py-12 sm:py-24">
              <div className="w-full mt-5 justify-center items-center flex-col mb-5 sm:mb-10">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center text-gray-50 font-black leading-7 md:leading-10">
                  <span><i className={wiki_data?.page_icon} /> <br />{wiki_data?.title}</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Content */}

  </div>

    <div className="block md:flex w-full min-w-full">
        <ul className="flex-col py-2 space-y-1 text-gray-300 px-2 mt-10 w-full md:w-64 md:border-r border-gray-700">
          <span className="px-3 py-2 text-gray-400 text-sm font-bold">Information</span>
          {page_list.map((page_link) => (
                      <a href={"/wiki/" + page_link?.str_id} alt={page_link?.title} className="transition-colors duration-300 flex items-center w-full py-2.5 px-3 mt-2 rounded text-forward hover:bg-bgray-overlay">
                      <i className={page_link?.page_icon + " m-1 my-auto text-xl text-gray-500"} />
                      <span className="ml-2 text-md font-bold">{page_link?.title}</span>
                    </a>
          ))}
        </ul>
        <div className="w-full mt-5 md:mt-16 px-5 md:px-10 mb-20">
          <ReactMarkdown className="w-full prose dark:prose-invert max-w-none break-words">{wiki_data.content}</ReactMarkdown>
        </div>
    </div>
    <Footer/>

    </>
  );
}

export default ServerList;
