import Image from 'next/image';
import Link from 'next/link';

import mainImage from '@/../public/main.png';

export default function Home() {
  return (
    <main className="flex-1 mb-28">
      <div className="h-fit flex flex-row w-full border-b border-border">
        <Image src={mainImage} alt="main image alt" className="w-[46%]"/>
        <div className="items-center justify-center flex flex-col w-[54%]">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl font-heading bg-primary px-2 py-1 text-primary-foreground w-fit">
            Maidcore
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
            Your space for everything maidcore.
          </p>
        </div>
      </div>
      <div className="w-full mt-24">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center font-heading hover:opacity-80 transition-all">
          <Link href="https://open.spotify.com/intl-ja/album/5sjDUgKGIJREBDfHcDInKE?si=kVUuoKs2Tl6ZP6RsT_j8XA">
            Nimitori's <span className="bg-primary text-primary-foreground px-2">Exclusive</span> maidcore.info Track
          </Link>
        </h2>
        <p className="leading-6 [&:not(:first-child)]:mt-8 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
          Our very own maid — Nimitori — has generously made us a track specifically for this site. Be sure to support her and listen to it
          on <Link
            href="https://open.spotify.com/intl-ja/album/5sjDUgKGIJREBDfHcDInKE?si=kVUuoKs2Tl6ZP6RsT_j8XA"
            className="hover:opacity-80 transition-all underline"
          >
            Spotify
          </Link>!
        </p>
      </div>
      <div className="mt-24">

      </div>
    </main>
  );
}
