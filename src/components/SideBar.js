import React from 'react'
import Tv from './../assets/tv.svg'
import Home from './../assets/Home.svg'
import Movie from './../assets/Movie Projector.svg'
import Series from './../assets/TV Show.svg'
import Upcoming from './../assets/Calendar.svg'
import Logout from './../assets/Logout.svg'
import { Link } from 'react-router-dom'


const SideBar = () => {
  return (
    <div className='w-[226px] h-[100vh] border-[1px] border-[#666] hidden py-[52px] rounded-r-[45px] md:flex md:flex-col justify-between flex-none'>
       
       <Link to={`/`} >
          <div className='flex justify-center items-center gap-2'>
            <img src={Tv} alt="" className='md:w-[50px] w-6'/>
            <p className=' md:text-[24px] font-bold leading-6 text-[#666]'>Moviebox</p>
        </div>
        </Link>

        <ul className='flex flex-col'>
        <Link to={`/`} >
            <li className='flex gap-3 items-center text-[#666] pl-6 py-[28px] w-full hover:bg-light-rose hover:border-r-[4px] hover:border-r-rose-700'>
                <img src={Home} alt="" className='w-6 h-6'/>
                <p className='text-[20px] font-[600]'>Home</p>
            </li>
            </Link>
            <li className='flex gap-3 items-center text-[#666] pl-6 py-[28px] w-full hover:bg-light-rose hover:border-r-[4px] hover:border-r-rose-700'>
                <img src={Movie} alt="" className='w-6 h-6'/>
                <p className='text-[20px] font-[600]'>Movies</p>
            </li>
            <li className='flex gap-3 items-center text-[#666] pl-6 py-[28px] w-full hover:bg-light-rose hover:border-r-[4px] hover:border-r-rose-700'>
                <img src={Series} alt="" className='w-6 h-6'/>
                <p className='text-[20px] font-[600]'>Tv Series</p>
            </li>
            <li className='flex gap-3 items-center text-[#666] pl-6 py-[28px] w-full hover:bg-light-rose hover:border-r-[4px] hover:border-r-rose-700'>
                <img src={Upcoming} alt="" className='w-6 h-6'/>
                <p className='text-[20px] font-[600]'>Upcoming</p>
            </li>
        </ul>
        <div className='rounded-[20px] border-[1px] bg-light-rose border-rose-700 p-3 pt-[42px] w-[170px] mx-auto'>
            <p className='text-[15px] text-[#666] font-[600]'>Play movie quizes and earn <span className='block'>free tickets</span></p>
            <p className='text-[12px] text-[#666] font-[500] my-2'>50k people are playing now</p>
            <p className='text-[12px] text-[#666] font-[500] py-[6px] px-4 rounded-[30px] bg-light-rose w-fit text-rose-700 mx-auto'>Start playing</p>
        </div>
        <div className='flex gap-3 items-center text-[#666] pl-6 py-[12px] w-full hover:bg-light-rose hover:border-r-[4px] hover:border-r-rose-700'>
                <img src={Logout} alt="" className='w-6 h-6'/>
                <p className='text-[20px] font-[600]'>Logout</p>
            </div>
    </div>
  )
}

export default SideBar