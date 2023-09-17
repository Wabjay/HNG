import React from 'react'
import Apple from "./../assets/Apple.svg"
import Heart from "./../assets/Heart.svg"
import Imdb from "./../assets/Imdb.svg"
import { Link } from 'react-router-dom';

export const MovieCard = ({ data, hide, img, text }) => {

    const years = data.release_date.split('-')[0]
    return (
        <Link to={`/movie/${data.id}`} >
            <div data-testid='movie-card' className='relative w-full max-w-[250px] flex flex-col gap-3'>
                <img data-testid='movie-poster' src={`https://www.themoviedb.org/t/p/original/${data.poster_path ? data.poster_path : data.backdrop_path}`} alt="" className={img ? img : 'h-[370px]'} />
                <div className='z-20 w-full px-4 mt-4 flex justify-between  absolute top-0 '>
                    <p className='w-fit px-[8px] py-[3px] rounded-[12px] bg-greyBlur text-[12px] font-bold'>Tv Series</p>
                    <img src={Heart} className='h-5 w-5 p-1 rounded-[50%] bg-greyBlur' alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-[12px] font-bold text-grey-400'>{data.production_countries?.map((nam, i) => i === 0 && (<span key={i}>{nam.name},</span>))} <span data-testid='movie-release-date'>{years}</span> - Current</p>
                    <p data-testid='movie-title' className={text ? text : 'text-[18px] font-bold text-grey-900'}>{data.title}</p>
                    {!hide && <div className='flex justify-between'>
                        <div className='w-fit flex gap-[10px]'>
                            <img src={Imdb} className='h-[17px] w-[35px]' alt="" />
                            <p className='text-[12px] font-normal text-grey-900'>{data.vote_average}/100</p>
                        </div>
                        <div className='w-fit flex gap-[10px]'>
                            <img src={Apple} className='h-[17px] w-[16px]' alt="" />
                            <p className='text-[12px] font-normal text-grey-900'>90%</p>
                        </div>
                    </div>}
                    <p className='text-[12px] font-bold text-grey-400 flex gap-2'>{data.genres?.map((genre, index) => <span >{genre.name}</span>)}</p>

                </div>

            </div>
        </Link>
    )
}
