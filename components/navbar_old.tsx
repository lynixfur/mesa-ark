import * as React from 'react'

type Props = {
    links: any 
}

const Navbar = ({ links }: Props) => (
<nav className="px-2 sm:px-4 py-2.5 bg-mesa-gray w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://mesa-ark.com" className="flex items-center">
      <img src="/images/MESA_Icon.png" className="w-20 h-20"></img>
  </a>
  <div className="flex md:order-2">
      <a href="https://shop.mesa-ark.com" className="text-white font-bold bg-mesa-orange focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 uppercase ">Shop</a>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 bg-mesa-gray" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-mesa-gray">
    <li>
        <a href="/" className="block py-2 pr-4 pl-3 text-white rounded text-white hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors">Home</a>
      </li>
      <li>
        <a href="/info/pvp-system" className="block py-2 pr-4 pl-3 text-white rounded hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors">Information</a>
      </li>
      <li>
        <a href="/servers" className="block py-2 pr-4 pl-3 text-white rounded hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors">Servers</a>
      </li>
      <li>
        <a href="/leaderboards" className="block py-2 pr-4 pl-3 text-white rounded hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors">Leaderboards</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
)

export default Navbar