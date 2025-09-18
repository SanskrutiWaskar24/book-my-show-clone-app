import React from "react";
import DefaultLayoutHoc from "../layouts/Default.layout";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";
import Poster from "../components/Poster/Poster.Component";


const PlayPage = () => {

  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in Pune</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://in.bmscdn.com/events/moviecard/ET00411245.jpg"
                title="Atharva Sudame Live"
                subtitle="Comedy | Marathi | 2hr 30mins"
                href ="https://in.bookmyshow.com/plays/atharva-sudame-live/ET00411245"

              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://in.bmscdn.com/events/moviecard/ET00052024.jpg"
                title="Varhad Nighalaya Londanla"
                subtitle="Comedy | Marathi | 2hr 30mins"
                href="https://in.bookmyshow.com/plays/varhad-nighalaya-londanla/ET00052024"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://in.bmscdn.com/events/moviecard/ET00411245.jpg"
                title="Albattya Galbattya"
                subtitle="Comedy | Marathi | 2hr 30mins"
                href="https://in.bookmyshow.com/plays/albattya-galbattya/ET00462051"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://in.bmscdn.com/events/moviecard/ET00411245.jpg"
                title="All The Best"
                subtitle="Comedy | Marathi | 2hr 30mins"
                href="https://in.bookmyshow.com/plays/all-the-best/ET00384424"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://in.bmscdn.com/events/moviecard/ET00411245.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy | Marathi | 2hr 30mins"
                href=""
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://in.bmscdn.com/events/moviecard/ET00411245.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy | Marathi | 2hr 30mins"
                href=""
              />
            </div>
          </div>
        </div>

    <div className="lg:w-1/4 p-4 bg-white rounded">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div>
        <PlayFilters title="Date" tags={["Today", "Tommrow", "This Weekend"]} />
      </div>
      <div>
        <PlayFilters title="Language" tags={["English" , "Hindi" , "Kannada"]} />
      </div>
    </div>
  </div>
  </>
  )
};

export default DefaultLayoutHoc(PlayPage);
