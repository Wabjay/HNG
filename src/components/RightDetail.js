import React from 'react'
import Star from './../assets/Star.png'
import List from './../assets/List.png'
import ListWhite from './../assets/List-white.png'
import Ticket from './../assets/Two Tickets.png'
import Movie from './../assets/Poster.png'


const RightDetail = ({ movie }) => {

    console.log(movie)
    return (
        <div className='flex flex-col w-[360px] gap-3'>
            <div className='flex items-center justify-end mb-2 gap-2'>
                <img src={Star} alt="" className='w-[30px] h-[30px]' />
                <p className='text-[25px] font-medium text-[#E8E8E8]'>8.6 </p>
                <p className='text-[#666] text-[20px] border-l-dark border-l-[4px] pl-1'>350k</p>
            </div>


            <div className='flex justify-center gap-2 items-center w-[360px] bg-rose-700 rounded-[10px] h-[55px]'>
                <img src={Ticket} alt="" className='w-[25px] h-[25px]' />
                <p className='text-[20px] font-medium text-white'>See Showtimes</p>
            </div>

            <div className='flex justify-center gap-2 items-center w-[360px] bg-light-rose rounded-[10px] h-[55px] border-rose-700 border'>
                <img src={List} alt="" className='w-[25px] h-[25px]' />
                <p className='text-[20px] font-medium text-dark'>More watch option</p>
            </div>

            <div className='flex gap-1 relative mt-6 w-full h-fit rounded-[20px] overflow-hidden'>

                <img src={Movie} alt="" className='w-[118px] h-[229px]' />
                <img src={Movie} alt="" className='w-[118px] h-[229px]' />
                <img src={Movie} alt="" className='w-[118px] h-[229px]' />


                <div className='flex gap-4 items-center bg-blur backdrop-blur-[2px] w-full pl-4 py-3  absolute bottom-0 left-0 right-0 z-20'>
                    <img src={ListWhite} alt="" className='w-[25px] h-[25px]' />
                    <p className='text-[14px] font-medium text-[#E8E8E8]'>The Best Movies and Shows in September</p>
                </div>
            </div>
        </div>
    )
}

export default RightDetail