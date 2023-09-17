import React, { useEffect, useState } from 'react'
import Search from './../assets/Search.png'
import axios from 'axios'
import { HEADER } from '../constant/header'
import { Link } from 'react-router-dom'
import { TailSpin } from "react-loader-spinner";
const SearchBar = () => {
  const [value, setValue] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)




const searchHandler =(e)=>{
  e.preventDefault()
  setLoading(true)
  try {
    axios.get( `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false`, HEADER)
  .then(res =>  {  
      res.data.results.map(movie => setMovies(movies => [...movies, movie]))
      console.log(res)
      setLoading(false)
  })
  } catch (err) {
    console.log(err)
  setLoading(false)
  }
}

useEffect(()=>{
  value === "" && setMovies([])
  
},[value]) 

  return (
  <div className='relative w-[80%] max-w-[525px]'>
      <form onSubmit={searchHandler}>
    <div className='flex justify-between items-center px-2 border-[2px] border-[#D1D5D8] bg-blur rounded=[6px]'>
      <input type="text" onChange={e => setValue(e.target.value)} className='text-white text-[16px] leading-6 font-[400] bg-transparent focus:transparent  focus:outline-none focus:border-0 w-full' value={value} placeholder='What do you want to watch?' />
      <button type="submit">{loading ? <TailSpin
          height="16"
          width="16"
          color="#fff"
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
        /> : <img src={Search} alt=""/>}</button>
    </div>
      </form>
    
  {movies.length > 1 &&
  <div className='absolute w-full mt-3 bg-white border-[2px] border-[#D1D5D8] rounded=[6px] h-fit max-h-[400px] overflow-y-scroll'>
  {movies.map((filteredmovie, index )=> (
    index > 0 &&
    <>{console.log(movies)}
<Link to={`/movie/${filteredmovie.id}`} ><p key={index} className='py-2 hover:bg-dark hover:text-white border-b-[1px]'><span className='mx-2'>{filteredmovie.title}</span></p></Link>


</>
))}
  </div>}
    <div>
      
    </div>

    </div>
  )
}

export default SearchBar