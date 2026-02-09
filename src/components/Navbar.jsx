import { Link } from 'react-router-dom';
import logoHeader from '../assets/images/logoHeader.png';
import { FiAlignLeft } from "react-icons/fi";
import { FaShirt } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useState } from 'react';




const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-md solid border-gray-300 relative">
      <div className='flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3'>
      {/* Logo */}
      <div className="w-1/3 flex justify-start">
      <button onClick={() => setOpen(!open)} className="menu-btn">
      <FiAlignLeft size={24} />
      </button>
      </div>
      {/* Navigation Links */}
      <div className="w-1/3 flex justify-center">
        <Link to="/"><img src={logoHeader} alt="logo" className="w-32" /></Link>
      </div>
      {/* Right */}
      <div className="flex justify-end gap-5 w-1/3">
        <button className="cart-btn">Cart</button>
        <button className="login-btn">Login</button>
      </div>
      </div>
          {open && (
  <div className="absolute bg-white shadow-md">
    <ul className="w-64 bg-white shadow-lg rounded-lg divide-y ">
  <li>
    <Link
      to="/"
      className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-gray-200"
    >
      <FaShirt size={24} />
      <span>Home</span>
    </Link>
  </li>

  <li>
    <Link
      to="/products"
      className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-gray-200"
    >
      <MdOutlineComputer size={24} />
      Computer
    </Link>
  </li>

  <li>
    <Link
      to="/about"
      className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-gray-200"
    >
      <IoBedOutline size={24} />
      Furniture
    </Link>
  </li>

  {/* Smartphone with Submenu */}
  <li className="relative group">
    <Link
      to="/contact"
      className="flex items-center justify-between gap-3 px-4 py-2 text-gray-800 hover:bg-gray-200"
    >
      <span className="flex items-center gap-3">
        <IoPhonePortraitOutline size={24} />
        Smartphone
      </span>
    </Link>

    {/* Sub Dropdown */}
    <ul
      className="absolute left-full top-0 ml-1 w-56 bg-white shadow-lg rounded-lg
                 opacity-0 invisible
                 group-hover:opacity-100 group-hover:visible
                 transition duration-200"
    >
      <li className="px-2 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
        iPhone
      </li>

      <li className="px-2 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
        Samsung
      </li>

      <li className="px-2 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
        OnePlus
      </li>
    </ul>
  </li>
</ul>

  </div>
)}
    </nav>


  )
}
export default Navbar