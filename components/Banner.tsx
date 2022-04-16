import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { useState, useEffect } from 'react'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'
import Image from 'next/image'

interface Props {
    netflixOriginals: Movie[]
}

function Banner({netflixOriginals}:Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])

    },[netflixOriginals])

    return (
        <div className='flex flex-col py-16 space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
            <div className='absolute top-0 left-0 h-[95vh] w-screen -z-10'>
                <Image 
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
                    layout="fill" 
                    objectFit='cover'
                />
            </div>

            <h1 className='text-2xl font-bold lg:text-7xl md:text-4xl'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-md'>
                {movie?.overview}
            </p>

            <div className='flex space-x-3'>
                <button className='text-black bg-white bannerButton'>
                    <FaPlay className='w-4 h-4 text-black md:h-7 md:w-7'/>Play
                </button>
                <button className='bannerButton bg-[gray]/70'>
                    More Info<InformationCircleIcon className='w-5 h-5 text-black md:h-8 md:w-8'/>
                </button>
            </div>
        </div>
        
    )
}

export default Banner