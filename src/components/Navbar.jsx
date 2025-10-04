import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white flex justify-between items-center p-4 shadow-lg'>
            <div className="logo font-bold text-xl">
                Password Manager
            </div>
            <ul>
                <li className='flex space-x-6'>
                    <Link to="/" className='cursor-pointer hover:text-blue-400 transition-colors'>Home</Link>
                    <Link to="/about" className='cursor-pointer hover:text-blue-400 transition-colors'>About</Link>
                    <Link to="/contact" className='cursor-pointer hover:text-blue-400 transition-colors'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
