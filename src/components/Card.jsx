import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ data }) => {
  // console.log(data)
  return (
    <div className="group flex flex-col gap-2 rounded-lg shadow-lg dark:shadow-lime-50 dark:shadow-md">
      <Link href={`/movie/${data.id}`} className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          alt="poster"
          className="sm:rounded-lg group-hover:opacity-60 transition-opacity duration-300"
        ></Image>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:inline-block space-x-2">
          <span
            className="
         text-2xl h text-green-400"
          >
            {data.vote_average.toFixed(1)}
          </span>
         <span> points</span>
        </div>
      </Link>

      <div className="flex flex-col h-full w-full p-2">
        <h2 className="font-bold flex-1">{data.title || data.name}</h2>
        <p className="line-clamp-2 text-md  ">{data.overview}</p>
        <div className="flex  items-center justify-between">
          {data.release_date}
          <p className="flex items-center gap-2">
            <FiThumbsUp color={'blue'}/>
            {data.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
