import { parse } from "url";
import { redirect } from "next/navigation";
import { cookies as cookieHelper, headers } from "next/headers";
import { cookies } from "@/lib/constants";

import Pagination from "@/components/Pagination/Pagination";
import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/Card/Card";

import getMovies from "@/api/movies/getAllMovies";

export type MoviesType = {
  movies: {
    id: number;
    title: string;
  }[];
  pagination: any;
};

function MoviesPage({ movies, pagination }: MoviesType) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="uppercase flex justify-center text-2xl font-bold py-5">Films die nu draaien</h1>
        <div className="flex flex-wrap justify-evenly">
          {movies.map((movie: any) => ( 
            <Card
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              path={movie.path}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Pagination pagination={pagination} />
        </div>
      </div>
    </>
  );
};

async function MoviesPageWithData() {
  const headersList = headers();
  const headerUrl = headersList.get('x-url') || "";

  const parsedUrl = parse(headerUrl, true);
  const page = parsedUrl.query.page;

  const accessToken = cookieHelper().get(cookies.ACCESS_TOKEN);

  if (!accessToken) {
    return redirect("/");
  }

  // @ts-ignore parse url verwacht een string | string[] | undefined maar page is een number 
  const { movies, pagination } = await getMovies(accessToken, page);

  if (!movies?.length) {
    return redirect("/");
  }

  return <MoviesPage movies={movies} pagination={pagination} />;
}

export default MoviesPageWithData;
