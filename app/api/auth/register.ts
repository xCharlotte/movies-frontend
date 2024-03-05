import apiInstance from "@/api/apiInstance";

export async function registerUser(
  name: string,
  email: string,
  password: string,
  password_confirmation: string
): Promise<any> {
  try {
    const response = await apiInstance("/api/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      }),
    });

    return response.json();
  } catch (error) {
    throw error;
  }
}


