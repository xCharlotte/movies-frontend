import apiInstance from "@/api/apiInstance";

export default async function getFavoriteMovies(
  accessToken: {
    value: string,
  },
): Promise<any | null> {
  try {
    const result = await apiInstance(`/api/movies/favorite/get/all`, {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
        'Content-Type': 'application/json',
      },
    });

    if (!result) {
      return null;
    }

    return result.data;

  } catch (error: any) {
    console.error("Error getting favorite movies by user:", error.message);
    return null;
  }
}