import React  from "react";
const Cast = (props) => {

    console.log(props)
    return(
        <div>
            <div className="flex flex-col items-center">
                <div className="w-32 h-32">
                    <img src={`https://image.tmdb.org/t/p/original${props.image}`} 
                    alt="Cast and Crew" 
                    className="w-full h-full rounded-full object-center object-cover"/>
                </div>
            </div>
        </div>
    )
}
export default Cast;