const ServerCard = (props: any) => (
    <div className="bg-mesa-gray shadow-md shadow-mesa-orange/70 p-4">
        <div className="flex justify-center">
            <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
            <img src={props.server.server_icon} alt={props.server.name} className=" w-full  object-scale-down lg:object-fit  lg:h-48 rounded-2xl" />
            </div>
        </div>
        <div className="flex-auto ml-3 justify-evenly py-2">
          <div className="flex flex-wrap ">
            <h2 className="flex-auto text-2xl uppercase font-bold text-mesa-orange text-center">{props.server.name}</h2>
          </div>
          <p className="text-center text-white uppercase font-bold">{props.server.connection_url.replace("steam://connect/","")}</p>
          <hr className="my-5"></hr>
          <p className="text-center text-white uppercase font-semibold">{props.server.players} Players Online</p>
          <div className="flex justify-center p-4 pb-2 w-full" />
            <a href={props.server.connection_url} className="w-full text-white font-bold bg-mesa-orange focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 uppercase " type="button" aria-label="like">Join</a>
          </div>
    </div>
) 

export default ServerCard