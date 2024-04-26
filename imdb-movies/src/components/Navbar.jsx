import React from 'react'
import Logo from '../assets/movieLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-3'>
        <img className='w-[50px]' src={Logo} alt=''/>
        <Link to='/' className='text-blue-500 text-2xl font-bold'>Movies</Link>
        <Link to='/watchlist' className='text-blue-500 text-2xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar