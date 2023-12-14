"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import SearchInput from "./components/SearchInput";
import playButtonIcon from "../../public/images/icon-play.svg";
import WordBreak from "./components/WordBreak";
import WordContent from "./components/WordContent";
import newWindowIcon from "../../public/images/icon-new-window.svg"

export default function Home() {
  return (
    <div className="p-5 md:max-w-screen-md mx-auto">
      {/* Header Section */}
      <header>
        <nav>
          <Navbar />
        </nav>
        <SearchInput />
      </header>
      {/* Main Section */}
      <main>
        <section className="flex justify-between">
          <div>
            <h1 className="text-zinc-800 text-[32px] font-bold ">keyboard</h1>
            <span className="text-purple-500 text-lg font-normal leading-normal">
              /ˈkiːbɔːd/
            </span>
          </div>

          <Image
            src={playButtonIcon}
            alt="play button icon"
            className="max-w-full max-h-full w-[48px] md:w-[75px]"
          />
        </section>

        <WordBreak wordtype="noun" />

        <WordContent
          meaningList={[
            "(etc.) A set of keys used to operate a typewriter, computer etc.",
            "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
            "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard",
          ]}
        />

        <span className="flex space-x-4 mt-4">
          <p className="text-neutral-500 text-base font-normal">Synonyms</p>
          <p className="text-purple-500 text-base font-bold ">
            electronic keyboard
          </p>
        </span>

        <WordBreak wordtype="verb" />

        <WordContent
          meaningList={[
            "To type on a computer keyboard.",
            "“Keyboarding is the part of this job I hate the most.”",
          ]}
        />
      </main>

      <footer>
        <hr className="w-full h-[3px] mx-auto my-4 bg-gray-100 border-0 rounded " />
        <p className="text-neutral-500  font-normal font-['Inter'] underline">
          Source
        </p>
        <a className="text-zinc-800  font-normal font-['Inter'] underline flex items-center ">
          https://en.wiktionary.org/wiki/keyboard <span className="pl-2"> <Image src={newWindowIcon} alt="New window Icon"/> </span>
        </a>
      </footer>
    </div>
  );
}
