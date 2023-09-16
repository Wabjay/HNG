import React from 'react'
import { MovieCard } from './MovieCard'
const Featured = ({movies}) => {


  return (
    <div className='w-full max-w-[1240px] mx-auto px-3 md:px-6 lg-px-8'>
        <div className='mb-11 flex justify-between items-center'>
        <p className='text-[36px] font-bold text-black'>Featured Movie</p>
        <p className='text-[18px] font-normal text-rose-700'>See more ></p>
        </div>
        <div className='grid grid-cols-2 gap-4 gap-y-10 md:gap-y-[80px] md:grid-cols-3 lg:grid-cols-4 xl:gap-[80px] xl:gap-y-[100px]'>
          {movies?.map((movie,index)=>  (movie.backdrop_path !== null) && <MovieCard data={movie} key={index}/>)}  
        </div>
    </div>
  )
}

export default Featured