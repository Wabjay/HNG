import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Imdb from "./../assets/Imdb.svg"
import Apple from "./../assets/Apple.svg"
import Play from "./../assets/Play.png"


const Banner = ({ movies }) => {

    const [movie, setNum] = useState([])

    useEffect(() => {
        movies.map(movie => (movie.backdrop_path !== null) && setNum(num => [...num, movie]))
    }, [movies])

    return (
        <>
            {

                <div className='w-full max-w-[1440px] h-[400px] md:h-[600px] mx-auto relative'>
                    {console.log(movie)}
                    <img src={`https://www.themoviedb.org/t/p/original/${movie[0]?.backdrop_path}`} alt="" className='w-full h-full' />
                    <div className='w-full h-fit max-h-[600px] absolute top-4'>
                        <div className='w-full max-w-[1240px] px-3 py-4 mx-auto md:px-6 lg-px-8 '>
                            <Navbar movies={movies} />
                            <div className='flex flex-col gap-4 mt-[50px] md:mt-[93px]'>
                                <p className='text-[36px] md:text-[48px] font-bold text-white w-[90%] max-w-[404px]'>{movie[0]?.title}</p>
                                <div className='flex gap-[34px] w-fit'>
                                    <div className='w-fit flex gap-[10px]'>
                                        <img src={Imdb} className='h-[17px] w-[35px]' alt="" />
                                        <p className='text-[12px] font-normal text-white'>80.6/100</p>
                                    </div>
                                    <div className='w-fit flex gap-[10px]'>
                                        <img src={Apple} className='h-[17px] w-[16px]' alt="" />
                                        <p className='text-[12px] font-normal text-white'>90%</p>
                                    </div>
                                </div>
                                <p className='text-[14px] font-medium leading-[18px] text-white w-[90%] max-w-[302px]'>{movie[0]?.overview}</p>
                                <div className='flex px-4 py-[3px] gap-2 w-fit bg-rose-700 rounded-[6px]'>
                                    <img src={Play} alt="" className='w-5' />
                                    <p className='text-[14px] font-bold text-white leading-6'>WATCH TRAILER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>

    )
}

export default Banner