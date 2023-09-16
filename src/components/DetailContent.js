import Trailler from './../assets/Poster.png'
import LeftDetail from './LeftDetail'
import RightDetail from './RightDetail'

const DetailContent = ({movies}) => {


  return (
    <div className='flex-auto w-full p-4 lg:p-8'>
            <img src={`https://www.themoviedb.org/t/p/original/${movies.poster_path ? movies.poster_path : movies.backdrop_path}`} alt="" className='w-full rounded-[20px] max-h-[449px]'/>
        <div className='lg:flex mt-8 gap-6'>
            {/* Left Side */}{console.log(movies)}
       <LeftDetail  movie={movies}/>
            {/* Right Side */}
       <RightDetail  movie={movies}/>
        </div>
    </div>
  )
}

export default DetailContent