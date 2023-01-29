const ServerCard = (props: any) => (
        <>
            {/*<div className="bg-mesa-gray shadow-md p-4">
        <div className="flex justify-center">
            <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
            <img src={props.server.server_icon} alt={props.server.name} className=" w-full  object-scale-down lg:object-fit  lg:h-48 rounded-2xl" />
            </div>
        </div>
        <div className="flex-auto ml-3 justify-evenly py-2">
          <div className="flex flex-wrap ">
            <h2 className="flex-auto text-2xl uppercase font-bold text-mesa-orange text-center">{props.server.name}</h2>
          </div>
          <p className="text-center text-white uppercase font-bold mb-5">{props.server.connection_url.replace("steam://connect/","")}</p>
          {props.server.is_online == "1" 
            ? <p className="text-center text-white uppercase font-bold text-mesa-blue">Online</p>
            : <p className="text-center text-white uppercase font-bold text-mesa-orange">Offline</p>
          }
          <p className="text-center text-white uppercase font-semibold">{props.server.players} Players Online</p>
          <div className="flex justify-center p-4 pb-2 w-full" />
            <a href={props.server.connection_url} className="w-full text-white font-bold bg-mesa-orange focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 uppercase " type="button" aria-label="like">Join</a>
          </div>
        </div>*/}
        <div className="bg-gray-600 shadow-md rounded-2xl" style={{background: 'url(' + props.server.server_bg + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="bg-bgray-secondary shadow-md p-4 rounded-2xl">
        <div className="flex-none lg:flex">
          <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
            <img src={props.server.server_icon} alt={props.server.name} className=" w-full  object-scale-down lg:object-fit  lg:h-48 rounded-2xl" />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap ">
              <h2 className="flex-auto text-lg font-medium text-gray-50">{props.server.name}</h2>
              <div className="w-full flex-none text-sm text-gray-400 font-bold ">
                {props.server.geolocation == "NA" ? "United States" : "Europe" }
              </div>
            </div>
            <p className="mt-3" />
            <div className="flex py-4  text-sm text-gray-200">
              <div className="flex-1 inline-flex items-center">
                <p><i className="fa-solid fa-compass mr-1" />{props.server.connection_url.replace("steam://connect/","")}</p>
              </div>
            </div>
            <div className="flex p-4 pb-2 border-t border-gray-700 " />
            <div className="flex space-x-2 text-sm font-medium">
              <div className="flex-auto flex space-x-3">
                <button className="mb-2 md:mb-0 bg-bgray-secondary ring-1 ring-bgray-forward px-4 py-2 shadow-sm tracking-wider text-gray-100 rounded-full inline-flex items-center space-x-2 ">
                  <div className="flex">
                    <span>{props.server.players} Survivors</span>
                    <i className="fa-solid fa-circle text-green-500 animate-pulse my-auto ml-2" />
                  </div>
                </button>
              </div>
              <a href={props.server.connection_url} className="mb-2 md:mb-0 bg-mesa-orange font-bold px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-red-700" type="button" aria-label="like">Join</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
) 

export default ServerCard