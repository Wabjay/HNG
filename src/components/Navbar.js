import React from 'react'
import Tv from './../assets/tv.svg'
import SearchBar from './SearchBar'
import Menu from'./../assets/Menu.svg'

const Navbar = ({movies}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex justify-between items-center gap-2 md:gap-6'>
            <img src={Tv} alt="" className='md:w-[50px] w-6'/>
            <p className=' md:text-[24px] font-bold leading-6 text-white'>Moviebox</p> 
        </div>
        <SearchBar movies={movies}/>
        <div className='flex justify-between items-center gap-2 md:gap-6'>
            <p className=' md:text-[24px] font-bold leading-6 text-white'>Sign in</p>
            <img src={Menu} alt="" className='w-6 p-[6px] rounded-[50%] bg-rose-700'/>
        </div>
    </div>
  )
}

export default Navbar