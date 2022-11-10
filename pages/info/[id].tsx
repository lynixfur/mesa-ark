import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Footer from '../../components/sections/footer'

type Params = {
  params: any;
};

export async function getServerSideProps({ params }: Params) {
  const id = params.id;
  const res = await fetch(`http://bloody-ark.com:3000/api/wiki/${id}`);
  const list_res = await fetch(`http://bloody-ark.com:3000/api/wiki/page_list`);
  const data = await res.json();
  const list_data = await list_res.json();

  return {
    props: {
      wiki_data: data,
      page_list: list_data,
    },
  };
}

type InfoProps = {
  wiki_data: any;
  page_list: any;
};

function ServerList({ wiki_data, page_list }: InfoProps) {
  return (
    <>
      <Head>
        <title>MESArk - {wiki_data?.title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Navbar links={null} />

      <div className="w-full">
        <div
          className="h-full w-full"
          style={{
            background: "url(" + wiki_data?.bg_image + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-mesa-gray bg-opacity-70">
            <div className="flex h-full px-3 py-4 sm:p-10 md:p-0">
              <div className="my-auto flex justify-center w-full">
                <div>
                  <div className="container flex flex-col items-center py-12 sm:py-24">
                    <div className="w-full mt-5 justify-center items-center flex-col mb-5 sm:mb-10">
                      <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center text-gray-50 font-black leading-7 md:leading-10">
                        <span>
                          <i className={wiki_data?.page_icon} /> <br />
                          {wiki_data?.title}
                        </span>
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
        <ul className="flex-col space-y-1 text-white px-5 mt-10 w-full md:w-64 md:border-r-0 border-gray-700">
          <p className="mb-5 text-black text-xl font-bold uppercase">
            Information
          </p>
          {page_list.map((page_link: any) => (
            <>
              {page_link?.title == wiki_data?.title ? (
                <a
                  href={"/info/" + page_link?.str_id}
                  className="transition-colors duration-300 flex items-center w-full py-2.5 px-3 mt-2 text-forward hover:bg-mesa-orange bg-mesa-orange transistion-colors"
                >
                  <i
                    className={
                      page_link?.page_icon + " m-1 my-auto text-xl text-white"
                    }
                  />
                  <span className="ml-2 text-md font-bold">
                    {page_link?.title}
                  </span>
                </a>
              ) : (
                <a
                  href={"/info/" + page_link?.str_id}
                  className="transition-colors duration-300 flex items-center w-full py-2.5 px-3 mt-2 text-forward hover:bg-mesa-orange bg-mesa-gray transistion-colors"
                >
                  <i
                    className={
                      page_link?.page_icon + " m-1 my-auto text-xl text-white"
                    }
                  />
                  <span className="ml-2 text-md font-bold">
                    {page_link?.title}
                  </span>
                </a>
              )}
            </>
          ))}
        </ul>
        <div className="w-full mt-5 md:mt-16 px-5 md:px-10 mb-20">
          <ReactMarkdown className="w-full prose max-w-none break-words">
            {wiki_data.content}
          </ReactMarkdown>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ServerList;
