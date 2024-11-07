import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-green-100 ">
      <section className="grid grid-cols-2 h-[60vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold ${poppins.className}`}>
            The best URL shortener in the market
          </p>
          <p className="px-40 text-center">
            We are the most strightforword URL Shortener in the world .Most of
            the url shorteners will track you or ask you to give your details
            for login. We understand your needs and hence we have created this
            URL shortener
          </p>
          <div className="flex gap-3 justify-start text-white">
            <Link href="/shorten">
              <button className="bg-green-500 shadow-lg p-3 rounded-lg py-1 font-bold ">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-green-500 shadow-lg p-3 rounded-lg py-1 font-bold ">
                Github
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="an image of vector"
            src={"/vector.jpg"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
