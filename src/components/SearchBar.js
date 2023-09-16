import React, { useEffect, useState } from 'react'
import Search from './../assets/Search.png'
const SearchBar = ({movies}) => {
  const [value, setValue] = useState('')
  const [movieList, setMovielist] = useState([])



useEffect(() =>{
  let val = value.trim();
  movies.filter(movie => (val.length == 0 && movie.title.includes(value)) && setMovielist(movies => [...movies, movie]));
  // movies.filter(movie => movie.title.includes(value).map( movie => setMovielist(movies => [...movies, movie])));
  console.log(value)
},[value]) 


  return (
  <div className='relative w-[80%] max-w-[525px]'>
    <div className='flex justify-between items-center px-2 border-[2px] border-[#D1D5D8] rounded=[6px]'>
      <input type="text" onChange={e => setValue(e.target.value)} className='text-white text-[16px] leading-6 font-[400] bg-transparent focus:transparent  focus:outline-transparent focus:border-0 w-full' value={value} placeholder='What do you want to watch?' />
<img src={Search} alt=""/>
    </div>
    {/* {movieList.length > 0 &&
  <div className='absolute w-full mt-3 bg-white border-[2px] border-[#D1D5D8] rounded=[6px] h-[400px] overflow-hidden  scroll-smooth'>
   {movieList?.map((movie, index)=>(
<p key={index} className='py-2 hover:bg-dark hover:text-white border-b-[1px]'><span className='px-2'>{movie.title}</span></p>
))}
  </div>} */}
  {movieList.length > 1 &&
  <div className='absolute w-full mt-3 bg-white border-[2px] border-[#D1D5D8] rounded=[6px] h-fit  max-h-[400px] overflow-hidden  scroll-smooth'>
  {movies.filter(movie => movie.title.includes(value)).map((filteredmovie, index )=> (
    index > 0 &&
    <>{console.log(movieList)}
<p key={index} className='py-2 hover:bg-dark hover:text-white border-b-[1px]'><span className='px-2'>{filteredmovie.title}</span></p>
</>
))}
  </div>}
    <div>
      
    </div>

    </div>
  )
}

export default SearchBar