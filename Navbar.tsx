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
  /* Test */
    return (
      <>
<nav className="bg-bgray-bg border-b-2 border-gray-700 px-2 sm:px-4 py-2.5">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://mesa-ark.com" className="flex items-center">
        <img src="/images/MESA_Icon.png" className="w-20 h-20"></img>
    </a>
    <button onClick={handleMobile} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white md:hidden hover:bg-mesa-orange focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className={mobileMenu ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">
      <ul className="flex justify-center items-center flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-bgray-bg">
      <li>
        <Link href="/" className="block py-2 pr-4 pl-3 text-white rounded text-white hover:text-mesa-orange md:p-0 font-bold transition-colors text-lg"><i className="fa-solid fa-home"></i> Home</Link>
      </li>
        <li>
          <Link href="/servers" className="block py-2 pr-4 pl-3 text-white rounded text-white hover:text-mesa-orange md:p-0 font-bold transition-colors text-lg"><i className="fa-solid fa-server"></i> Servers</Link>
        </li>
      <li>
        <a href="https://shop.mesa-ark.com" className="block py-2 pr-4 pl-3 text-white rounded hover:text-mesa-orange md:p-0 font-bold transition-colors text-lg"><i className="fa-solid fa-shop"></i> Shop </a>
      </li>
      <li>
      <Link href="/leaderboards" className="block py-2 pr-4 pl-3 text-white rounded hover:text-mesa-orange md:p-0 font-bold transition-colors text-lg"><i className="fa-solid fa-trophy"></i> Leaderboards</Link>
      </li>
      <li>
        <a href="https://discord.gg/mesark-ascended" className="block py-2 pr-4 pl-3 text-white rounded hover:text-mesa-orange md:p-0 font-bold transition-colors text-lg"><i className="fa-brands fa-discord"></i> Discord </a>
      </li>
      <li className="hidden">
        <a href="https://shop.mesa-ark.com" className="block py-2 pr-4 pl-3 text-white bg-mesa-orange p-4 font-bold transition-colors">Login</a>
      </li>
      </ul>
    </div>
  </div>
</nav>
<div className="py-4 bg-bgray-secondary hidden">
  <p className="text-base text-mesa-orange font-bold text-center"><i className="fa-solid fa-circle-exclamation"></i> We&apos;re currently redesigning our website, things may break or change!</p>      
</div>
</>
)}

export default Navbar