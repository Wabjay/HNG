import React from 'react'

const LeftDetail = ({ movie }) => {
  const hour = Math.floor(movie.runtime / 60)
  const minutes = movie.runtime % 60
  const year = movie.release_date

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-5'>
        <p className='lg:text-[16px] xl:text-[23px] font-medium text-dark' data-testid='movie-title'> {movie.title}: {movie.production_companies?.map((nam, i) => i === 0 && (<span key={i}>{nam.name}</span>))} •  <span data-testid='movie-release-date'>{year}</span> • PG-13 • <span data-testid='movie-runtime'>{hour}h {minutes}m</span></p>
        <p className='text-rose-700 font-medium text-[15px] border-rose-400 border rounded-[15px] py-[3px] px-4 h-fit'>Action</p>
        <p className='text-rose-700 font-medium text-[15px] border-rose-400 border rounded-[15px] py-[3px] px-4 h-fit'>Drama</p>
      </div>
      <p className='text-[20px] text-light-dark' data-testid='movie-overview'>{movie.overview}</p>

      <div className='flex flex-col gap-[31px]'>
        <p className='text-[20px] text-light-dark'>Director :<span className='text-rose-700'> Joseph Kosinski</span></p>
        <p className='text-[20px] text-light-dark'>Writers :<span className='text-rose-700'> Jim Cash, Jack Epps Jr, Peter Craig</span></p>
        <p className='text-[20px] text-light-dark'>Stars :<span className='text-rose-700'> Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
      </div>
      <div>
        <div className='flex gap-4 items-center mt-[30px]'>
          <p className='text-[20px] font-medium text-white bg-rose-700 rounded-[10px] px-5 py-3'>Top rated movie #65</p>
          <p className='text-[20px] font-medium text-[#333] border border-[333] rounded-[10px] px-5 py-3'>Awards
            9 nominations</p>
        </div>
      </div>
    </div>
  )
}

export default LeftDetail