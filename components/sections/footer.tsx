const Footer = () => (
<footer className="bg-mesa-gray body-font bg-bgray-secondary">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-5 flex justify-center sm:justify-left sm:block">
              <img
                    alt="Bloody ARK Logo"
                    src="/images/MESA_Icon.png"
                    className="h-32 w-32"
                  />
              </nav>
          </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-mesa-orange tracking-widest text-md mb-3">
              NAVIGATION
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="block py-2 pr-4 pl-3 text-white rounded text-white hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors"
                  href="https://shop.bloody-ark.com/terms/privacy"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="block py-2 pr-4 pl-3 text-white rounded text-white hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors"
                  href="https://shop.bloody-ark.com/terms/checkout"
                >
                  Information
                </a>
              </li>
              <li>
                <a className="block py-2 pr-4 pl-3 text-white rounded text-white hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors" href="/info/vote">
                  Servers
                </a>
              </li>
              <li>
                <a
                  className="block py-2 pr-4 pl-3 text-white rounded text-white hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors"
                  href="https://shop.bloody-ark.com/category/1266875"
                >
                  Leaderboards
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-mesa-orange tracking-widest text-md mb-3">
              INFORMATION
            </h2>
            <nav className="list-none mb-10 ">
              <li>
                <a
                  className="block py-2 pr-4 pl-3 text-white rounded text-white hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors"
                  href="https://shop.mesa-ark.com/terms/privacy"
                >
                Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="block py-2 pr-4 pl-3 text-white rounded text-white hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors"
                  href="https://shop.mesa-ark.com/terms/checkout"
                >
                  Terms of Service
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a href="https://bloody-ark.com">
              <h2 className="title-font font-bold text-mesa-orange tracking-widest text-md mb-3">
                PARTNERED WITH
              </h2>
              <nav className="list-none mb-10 flex justify-center sm:justify-left sm:block">
                <img
                  alt="Bloody ARK Logo"
                  className="w-32"
                  src="https://bloody-ark.com/images/favicon.png"
                />
              </nav>
            </a>
          </div>
        </div>
      </div>
   <div className="bg-bgray-overlay">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
         <p className="text-white text-sm uppercase font-bold text-center sm:text-left">Copyright © 2022 Mesa ARK. All Rights Reserved. <span>Designed by Lynix</span></p>
      </div>
   </div>
</footer>
) 

export default Footer