import { Movie } from '../typings'
import Image from 'next/image'
import { secondUrl } from '../constants/movie'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'


interface Props {
    movie: Movie
}


function Thumbnail({ movie }: Props){
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
    
    return (
        <div 
            className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'
            onClick={() => {
                setCurrentMovie(movie)
                setShowModal(true)
            }}
        >
            <Image 
                src={`${secondUrl}${movie.backdrop_path || movie.poster_path}`} 
                layout="fill" 
                className='object-cover rounded-sm md:rounded'
            />
        </div>
    )
}
export default Thumbnail