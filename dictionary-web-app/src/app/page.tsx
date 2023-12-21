"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import SearchInput from "./components/SearchInput";
import playButtonIcon from "../../public/images/icon-play.svg";
import WordBreak from "./components/WordBreak";
import WordContent from "./components/WordContent";
import newWindowIcon from "../../public/images/icon-new-window.svg";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import data from "../data.json";

let dictionary_api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default function Home() {
  const [results, setResults] = useState(data);

  useEffect(() => {
    // Call the function with a search word (e.g., "keyboard")
    getWordDefinition("");
  }, []);

  const getWordDefinition = async function (searchWord: string) {
    try {
      const response = await axios.get(`${dictionary_api}${searchWord}`);
      const Data = await response.data;
      setResults(Data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  const searchFn = (searchvalue: string) => {
    getWordDefinition(searchvalue);
  };

  return (
    <div className="p-5 md:max-w-screen-md mx-auto ">
      {/* Header Section */}
      <header>
        <nav>
          <Navbar />
        </nav>
        <SearchInput search={searchFn} />
      </header>
      {/* Main Section */}
      <main>
        <section className="flex justify-between">
          <div>
            <h1 className="text-zinc-800 text-[32px] font-bold dark:text-[#FFF]">
              {results[0].word}
            </h1>
            <span className="text-purple-500 text-lg font-normal leading-normal">
              {results[0].phonetic}
            </span>
          </div>

          <Image
            src={playButtonIcon}
            alt="play button icon"
            className="max-w-full max-h-full w-[48px] md:w-[75px]"
          />
        </section>

        <WordBreak wordtype="noun" />

        <WordContent meaningList={results[0].meanings[0].definitions} />

        <span className="flex space-x-4 mt-4">
          <p className="text-neutral-500 text-base font-normal">Synonyms</p>
          <p className="text-purple-500 text-base font-bold ">
            electronic keyboard
          </p>
        </span>

        <WordBreak wordtype="verb" />

        <WordContent meaningList={results[0].meanings[1].definitions} />
      </main>

      <footer>
        <hr className="w-full h-[3px] mx-auto my-4 bg-gray-100 border-0 rounded " />
        <p className="text-neutral-500  font-normal font-['Inter'] underline">
          Source
        </p>
        <a
          className="text-zinc-800 dark:text-[#FFF]  font-normal font-['Inter'] underline flex items-center "
          target="_blank"
          href={results[0].sourceUrls[0]}
        >
          https://en.wiktionary.org/wiki/keyboard{" "}
          <span className="pl-2">
            {" "}
            <Image src={newWindowIcon} alt="New window Icon" />
          </span>
        </a>
      </footer>
    </div>
  );
}
