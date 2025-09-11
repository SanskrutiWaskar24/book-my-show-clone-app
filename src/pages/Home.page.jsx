import React, {useEffect, useState}  from "react";
import axios from 'axios';

//layout
import DefaultLayoutHoc from "../layouts/Default.layout";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCardComponent"
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component"
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const HomePage = () => {

    const [RecommendedMovies, setRecommendedMovies] = useState([]);

    const [Premier, setPremierMovies] = useState([]);

    const [onlineStreamEvents, setonlineStreamEvents] = useState([]);


    useEffect(()=>{
        const requestTopRatedMovies = async ()=> {
            const getTopRatedMovies = await axios.get('/movie/top_rated');
            setRecommendedMovies(getTopRatedMovies.data.results)
        }
        requestTopRatedMovies();
    } , [])

    useEffect(()=> {
        const requestPopular = async ()=> {
            const getPopular = await axios.get('/movie/popular');
            setPremierMovies(getPopular.data.results)
        }
        requestPopular();
    },[])

    useEffect(()=> {
        const requestUpcoming = async ()=> {
            const getUpcoming = await axios.get('/movie/upcoming');
            setonlineStreamEvents(getUpcoming.data.results)
        }
        requestUpcoming();
    },[])

    return <>

    <HeroCarousel />

    <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
    </div>

    <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider 
        title="Recommended Movies" 
        subtitle="List of Recommended Movies" 
        posters={RecommendedMovies}
        isDark={false}/>
    </div>

    <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <div className="hidden md:flex">
                <img src="" 
                alt="rupay" className="w-full h-full" />
            </div>
            <PosterSlider 
                title="Premier Movies" 
                subtitle="Brand new release every Friday" 
                posters={Premier}
                isDark={true}
            />
        </div>
    </div>

    <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider 
                title="Online streaming Movies" 
                subtitle="Online stream Movies" 
                posters={onlineStreamEvents}
                isDark={false}
            />
    </div>

    </>;
};

export default DefaultLayoutHoc(HomePage);
