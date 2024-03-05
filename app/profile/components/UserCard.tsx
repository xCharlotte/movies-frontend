"use client";

import Image from "next/image";

export type UserCardProps = {
  name: string;
  email: string;
  created_at: number;
}

export default function UserCard({ name, email, created_at }: UserCardProps) {
  return (
    <div className="flex flex-row items-center justify-evenly">
      <figure className="border border-gray-300 rounded-full w-32 h-32 overflow-hidden shrink-0">
        <Image
          src="/images/profile-pic.png"
          alt="profile_pic"
          height={150}
          width={150}
          className="object-cover w-full h-full"
        />
      </figure>
        <div className="flex flex-col text-gray-800 space-y-1">
          <p>Naam</p>
          <p>Email</p>
          <p>Gebruiker sinds</p>
        </div>
        <div className="flex flex-col text-gray-700 font-light space-y-1">
          <p>{name}</p>
          <p>{email}</p>
          <p>{created_at}</p>
        </div>
    </div>
  );
};
