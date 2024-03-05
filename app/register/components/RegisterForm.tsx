"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { FormEvent, useState } from "react";
import Input from "@/components/Form/Input/Input";
import Button from "@/components/Form/Button/Button";
import { cookies } from "@/lib/constants";

import { registerUser } from "@/api/auth/register";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const data = await registerUser(name, email, password, passwordConfirmation);

      Cookies.set(cookies.ACCESS_TOKEN, data.access_token, { expires: data.expires_in });
      Cookies.set(cookies.REFRESH_TOKEN, data.refresh_token, { expires: data.expires_in });

      router.push('/');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <Input
        label="Naam"
        name="name"
        type="text"
        id="name"
        placeholder="John Doe"
        required={true}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="E-mail"
        name="email"
        type="email"
        id="email"
        placeholder="johndoe@gmail.com"
        required={true}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Wachtwoord"
        name="password"
        type="password"
        id="password"
        placeholder="••••••••"
        required={true}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        label="Herhaal wachtwoord"
        name="password_confirmation"
        type="password"
        id="password_confirmation"
        placeholder="••••••••"
        required={true}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <Button
        className="w-full bg-amber-400 text-white hover:bg-amber-500 font-bold rounded-lg text-base px-5 py-2.5 text-center"
        type="submit"
      >
        Registreer
      </Button>

      <p className="text-sm font-light text-gray-500">
        Heb je al een account? <a href="/" className="font-medium text-primary-600 hover:underline">Login</a>
      </p>
    </form>
  );
};
