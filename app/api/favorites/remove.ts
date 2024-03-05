import apiInstance from "@/api/apiInstance";

export default async function removeFavoriteMovie(
  accessToken: string,
  movie_id: number,
  ): Promise<any | null> {
  try {
    const result = await apiInstance(`/api/movies/favorite/remove/${movie_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!result) {
      return null;
    }

    return result.data;

  } catch (error: any) {
    console.error("Error removing favorite movie:", error.message);
    return null;
  }
}