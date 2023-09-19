import Image from "next/image";

import { HandThumbUpIcon } from "@heroicons/react/24/outline";

function Thumbnail({ movies }) {
  const Base_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="group cursor-pointer p-2 transition duration-300 ease-in transform sm:hover:scale-105">
      <Image
        src={
          `${Base_URL}${movies?.backdrop_path || movies?.poster_path}` ||
          `${Base_URL}${movies?.poster_path}`
        }
        width={1920}
        height={1080}
        alt={`${movies?.title}`}
      />
      <div className="p-2 ">
        <p className=" truncate max-w-2xl mb-2 text-md">{movies?.overview}</p>
        <h2 className="text-2xl mb-2 text-white transition duration-500 ease-in-out group-hover:font-bold">
          {movies?.title}
        </h2>
        <p className="flex items-center opacity-0 transition duration-300 group-hover:opacity-100">
          {movies?.release_date && `${movies?.release_date}.`}{" "}
          <HandThumbUpIcon className="h-5 mx-2" /> {movies?.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
