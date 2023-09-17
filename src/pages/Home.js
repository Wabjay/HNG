import Banner from '../components/Banner'
import Featured from '../components/Featured'
import { TailSpin } from 'react-loader-spinner'
const Home = ({movies,loader}) => {

  return (
loader ? 
<TailSpin
          height="100"
          width="100"
          color="#fff"
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loader}
        /> :
    <div  className="flex flex-col gap-10 md:gap-[70px]">
        <Banner movies={movies}/>
        <Featured movies={movies}/>
    </div>
  )
}

export default Home