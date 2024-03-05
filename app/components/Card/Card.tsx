import Image from "next/image";
import Rating from "@/components/Rating/Rating";
import Link from "next/link";
import { fallBackImage } from "@/lib/constants";

export type CardProps = {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  path: string;
};

export default function Card({
  title,
  poster_path,
  vote_average,
  release_date,
  path,
}: CardProps) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
      <Link href={`movies/${path}`}>
        <div className="overflow-hidden rounded-lg shadow-lg h-full">
          <figure className="relative h-80 w-full">
            <Image
              src={poster_path ? `https://image.tmdb.org/t/p/w500` + poster_path : fallBackImage.FALLBACK_IMAGE}
              alt={title}
              layout="fill"
              className="object-cover rounded w-full h-full"
            />
          </figure>

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600 mt-2">Release Date: {release_date}</p>
            <Rating score={vote_average} />
            <p className="text-sm text-gray-600 mt-2">Vote: {vote_average}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}