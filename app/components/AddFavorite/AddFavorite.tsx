"use client";

import { useState } from "react";

import { Heart } from "lucide-react";
import Cookies from "js-cookie";
import { cookies } from "@/lib/constants";

import setFavoriteMovie from "@/api/favorites/store";
import Button from "@/components/Form/Button/Button";
import removeFavoriteMovie from "@/api/favorites/remove";

export type FavoriteMovieProps = {
  movie_id: number;
  is_favorite: boolean;
}

export default function AddFavorite({ movie_id, is_favorite }: FavoriteMovieProps) {
  const [isFavorite, setIsFavorite] = useState(is_favorite);

  const addFavorite = async () => {
    const access_token = Cookies.get(cookies.ACCESS_TOKEN) ?? "";

    try {
      await Promise.all([
        setFavoriteMovie(access_token, movie_id),
      ]);
      setIsFavorite(true)
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = async () => {
    const access_token = Cookies.get(cookies.ACCESS_TOKEN) ?? "";

    try {
      await Promise.all([
        removeFavoriteMovie(access_token, movie_id),
      ]);
      setIsFavorite(false)
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFavorite) {
      addFavorite();
    } else {
      removeFavorite();
    }
  };
  
  return (
    <form onSubmit={onSubmit}>
      <Button type="submit">
        <div className="flex flex-row space-x-3 py-3 md:py-6 items-center">
          <div className="rounded-full bg-gray-200 p-1.5">
            <Heart className="w-4 h-4" fill={isFavorite ? "#FF0000" : "#e5e7eb"} color="#FF0000" />
          </div>
          {isFavorite ? (
            <p className="text-gray-700 font-light">Toegevoegd aan favorieten</p>
          ) : (
            <p className="text-gray-700 font-light">Voeg toe aan favorieten</p>
          )}
        </div>
      </Button>
    </form>
  );
}
