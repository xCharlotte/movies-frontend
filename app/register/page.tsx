import Image from "next/image";
import RegisterForm from "./components/RegisterForm";

export default function Register() {
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
            <div className="flex flex-col items-center justify-center mb-6 text-gray-900">
              <h1 className="text-2xl font-semibold">Charlie Movies</h1>
              <p className="font-light">Maak een account aan</p>
            </div>
              <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
};
