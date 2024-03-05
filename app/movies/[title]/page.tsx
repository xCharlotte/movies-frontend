import Image from "next/image";

import { parse } from "url";
import { redirect, notFound } from "next/navigation";
import { cookies as cookieHelper, headers } from "next/headers";
import { cookies } from "@/lib/constants";

import getOneMovie from "@/api/movies/getOneMovie";
import Navbar from "@/components/Navbar/Navbar";
import Rating from "@/components/Rating/Rating";
import AddFavorite from "@/components/AddFavorite/AddFavorite";
import { fallBackImage } from "@/lib/constants";

export type DetailProp = {
  movie: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    is_favorite: boolean;
  }
};

function MovieDetailPage({ movie }: DetailProp) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-4 md:py-12">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
          <figure className="relative overflow-hidden w-full lg:max-w-[30%] shrink-0">
            <Image
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500` + movie.poster_path : fallBackImage.FALLBACK_IMAGE}
              alt={movie.title}
              width={400}
              height={300}
              className="object-cover rounded w-full h-full"
            />
          </figure>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="uppercase text-4xl font-semibold pb-2">{movie.title}</h1>
            <p className="text-gray-500 font-thin">{movie.release_date}</p>
            <div className="pb-2 md:pb-8 md:pt-3">
              <Rating score={movie.vote_average} />
            </div>
            <p className="text-gray-800 font-light">{movie.overview}</p>
            <AddFavorite movie_id={movie.id} is_favorite={movie.is_favorite} />
          </div>
        </div>
      </div>
    </>
  );
};

async function MoviePageWithData() {
  const headersList = headers();
  const headerUrl = headersList.get('x-url') || "";

  const parsedUrl = parse(headerUrl, true);

  const path = parsedUrl.path;

  const accessToken = cookieHelper().get(cookies.ACCESS_TOKEN);

  if (!accessToken) {
    return redirect("/");
  }

  const movie = await getOneMovie(accessToken, path);

  if (!movie) {
    return notFound();
  }

  return <MovieDetailPage movie={movie} />;
}

export default MoviePageWithData;
