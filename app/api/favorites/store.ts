import apiInstance from "@/api/apiInstance";

export default async function setFavoriteMovie(
  accessToken: string,
  movie_id: number,
  ): Promise<any | null> {
  try {
    const result = await apiInstance(`/api/movies/favorite`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({movie_id}),
    });

    if (!result) {
      return null;
    }

    return result.data;

  } catch (error: any) {
    console.error("Error getting favorite movie:", error.message);
    return null;
  }
}