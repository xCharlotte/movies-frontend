import { redirect, notFound } from "next/navigation";
import { cookies as cookieHelper, headers } from "next/headers";
import { cookies } from "@/lib/constants";

import Navbar from "@/components/Navbar/Navbar";
import getFavoriteMovies from "@/api/favorites/get";
import UserCard from './components/UserCard';

export type ProfileProps = {
  userData: {
    name: string;
    email: string;
    created_at: number;
    favorite_movies: {
      title: string;
    }[]
  }
}

function ProfilePage({ userData }: ProfileProps) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-row justify-center space-x-10 my-10">
          <div className="flex flex-col bg-white rounded-xl shadow-lg p-5 w-full">
            <UserCard name={userData.name} email={userData.email} created_at={userData.created_at} />
          </div>
          <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg p-5 w-full">
            <p className="text-xl font-semibol pb-5">Favoriet gemarkeerde films</p>
            {userData?.favorite_movies?.map((movie, index) => (
              <p 
                key={index} 
                className={`${
                  index % 2 === 0 ? "even:bg-gray-50" : "odd:bg-gray-100"
                } p-2 text-sm font-light`}>
                {movie.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

async function ProfilePageWithData() {
  const accessToken = cookieHelper().get(cookies.ACCESS_TOKEN);

  if (!accessToken) {
    return redirect("/");
  }

  const userData = await getFavoriteMovies(accessToken);

  if (!userData) {
    return notFound();
  }

  return <ProfilePage userData={userData} />;
}

export default ProfilePageWithData;