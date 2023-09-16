import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
// import { HEADER } from '../constant/header'
// import axios from '../constant/axios'

const Home = ({movies}) => {

  // const [movieList, setMovielist] = useState([])
  // const [movies, setMovies] = useState([])
  // const [loading, setLoading] = useState(false)

//   useEffect(() =>{
//     setLoading(true)
//     try {
//       axios.get( "changes?page=2", HEADER)
//     .then(res =>  {  
//         res.data.results.map(movie => setMovielist(movies => [...movies, movie.id]))
//         setLoading(false)
//     })
//     } catch (err) {
//       console.log(err)
//     setLoading(false)

//     }
// },[])

// useEffect( ()=>{
// movieList.map(async (movie, index) => {
  
//       try {
//       index < 50 && await axios.get(`${movie}`, HEADER)
//        .then(res =>  {  
//     setMovies(movies => [...movies, res.data])
//     setLoading(false)
// })
       
//       } catch (err) {
//         console.log(err);
//       }
//     });
// },[movieList])
  
  return (
    <div  className="flex flex-col gap-10 md:gap-[70px]">
        <Banner movies={movies}/>
        <Featured movies={movies}/>
    </div>
  )
}

export default Home