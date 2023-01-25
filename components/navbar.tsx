import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'

type Props = {
    links: any 
}

const Navbar = ({ links }: Props) => {


/* Mobile Menu */
const [mobileMenu, setMobileMenu] = useState(false);
const handleMobile = () => setMobileMenu(!mobileMenu);

/* Server Dropdown */
const [serverDropdown, setServerDropdown] = useState(false);
const handleServerDropdown = () => setServerDropdown(!serverDropdown);

    return (
<nav className="bg-mesa-gray border-b-1 border-gray-200 px-2 sm:px-4 py-2.5">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://mesa-ark.com" className="flex items-center">
        <img src="/images/MESA_Icon.png" className="w-20 h-20"></img>
    </a>
    <button onClick={handleMobile} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white md:hidden hover:bg-mesa-orange focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className={mobileMenu ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">
      <ul className="flex justify-center items-center flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-mesa-gray bg-mesa-gray">
      <li>
        <Link href="/" className="block py-2 pr-4 pl-3 text-white rounded text-white hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors">Home</Link>
      </li>
      <li>
        <div className="relative">
          <button onClick={handleServerDropdown} className="block py-2 pr-4 pl-3 text-white rounded hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors">Servers</button>
          <div className={serverDropdown ? 'absolute z-50 mt-3 w-48 shadow-lg origin-top-left left-0' : 'hidden z-50 mt-3 w-48 shadow-lg origin-top-left left-0'}>
            <div className="ring-1 ring-black ring-opacity-5 py-1 bg-mesa-dropdown">
              <Link className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-100 hover:bg-mesa-gray focus:outline-none focus:bg-mesa-gray transition duration-150 ease-in-out" href="/servers/6man">6 Mans Servers</Link>
              <Link className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-100 hover:bg-mesa-gray focus:outline-none focus:bg-mesa-gray transition duration-150 ease-in-out" href="/servers/4man">4 Mans Servers</Link>
            </div>
          </div>
        </div>
      </li>
      <li>
        <Link href="/leaderboards" className="block py-2 pr-4 pl-3 text-white rounded hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors">Leaderboards</Link>
      </li>
      <li>
        <a href="https://www.youtube.com/c/IMIAN3" className="block py-2 pr-4 pl-3 text-white rounded hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors"><i className="fa-brands fa-youtube"></i></a>
      </li>
      <li>
        <a href="https://discord.gg/mesasteam" className="block py-2 pr-4 pl-3 text-white rounded hover:text-mesa-orange md:p-0 uppercase font-bold transition-colors"><i className="fa-brands fa-discord"></i></a>
      </li>
      <li>
        <a href="https://shop.mesa-ark.com" className="block py-2 pr-4 pl-3 text-white bg-mesa-orange p-4 uppercase font-bold transition-colors">SHOP</a>
      </li>
      </ul>
    </div>
  </div>
</nav>
)}

export default Navbar