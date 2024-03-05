"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Input from "@/components/Form/Input/Input";
import Button from "@/components/Form/Button/Button";
import { cookies } from "@/lib/constants";

import { authenticateUser } from "@/api/auth/login";

export default function Login({ onLogin }: any) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const data = await authenticateUser(email, password);

      Cookies.set(cookies.ACCESS_TOKEN, data.access_token,{ expires: data.expires_in });
      Cookies.set(cookies.REFRESH_TOKEN, data.refresh_token,{ expires: data.expires_in });
      
      router.push('/movies');
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/popcorn.jpg"
          alt="bg-image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative z-10">
        <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900">
            Charlie Movies
          </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
              <Button 
                className="w-full bg-amber-400 text-white hover:bg-amber-500 font-bold rounded-lg text-base px-5 py-2.5 text-center"
                type="submit"
              >
                Login
              </Button>

              <p className="text-sm font-light text-gray-500">
                Nog geen account? <a href="/register" className="font-medium text-primary-600 hover:underline">Registeer je</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
