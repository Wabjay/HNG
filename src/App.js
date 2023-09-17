import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import axios from './constant/axios';
import { HEADER } from './constant/header';

function App() {

  
  const [movieList, setMovielist] = useState([])
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrmsg] = useState('')
  


  useEffect(() =>{
    setLoading(true)
    try {
      axios.get( "changes?page=1&include_adult=false", HEADER)
    .then(res =>  {  
        res.data.results.map(movie => setMovielist(movies => [...movies, movie.id]))
        setLoading(false)
    })
    } catch (err) {
      setErrmsg(err)
    setLoading(false)

    }
},[])

useEffect( ()=>{
movieList.map(async (movie, index) => {
  
      try {
      index < 50 && await axios.get(`${movie}`, HEADER)
       .then(res =>  {  
    setMovies(movies => [...movies, res.data])
    setLoading(false)
})
       
      } catch (err) {
        setErrmsg(err)
      }
    });
},[movieList])


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home movies={movies} loader={loading}/>} />
          <Route exact path="/movie/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
