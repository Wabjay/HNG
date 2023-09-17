import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import DetailContent from '../components/DetailContent'
import { useParams } from 'react-router-dom'
import axios from '../constant/axios'
import { HEADER } from '../constant/header'

const Detail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [movieDetails, setMovieDetails] = useState({})
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    try {
      axios.get(`${id}`, HEADER)
        .then(res => {
          setMovie(res.data)
          setLoading(false)
        })

    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  }, []);

  useEffect(() => {

    setMovieDetails(movie)
  }, [movie]);

  return (
    !loading &&
    <div className='md:flex'>
      <SideBar />
      <DetailContent movies={movieDetails} />
    </div>
  )
}

export default Detail