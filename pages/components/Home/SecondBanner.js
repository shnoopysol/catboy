import { useState, useEffect , useRef, createRef } from "react";
import Image from "next/image";
import NFTCardBlock from "./NFTCardBlock";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import nfts from "@/scripts/nfts";

function SecondBanner({ nftBannerRef }) {
  const [selected, setSelected] = useState();
  const [selectedDivRef, setSelectedDivRef] = useState();
  const [whichSeasonShowing, setWhichSeasonShowing] = useState(1);

  const changeSeason = (prevOrNext) => {
    if (prevOrNext === "prev") {
      if (whichSeasonShowing > 1) setWhichSeasonShowing((prev) => prev - 1);
    } else {
      if (whichSeasonShowing < 5) setWhichSeasonShowing((prev) => prev + 1);
    }
  };

  return (
    <div
      className="min-w-screen min-h-screen grid place-items-center text-center sm:p-6 relative"
      ref={nftBannerRef}
    >
      <Image
        src="/static/sparkly_background.svg"
        className="object-cover object-center z-0"
        fill
        priority alt="sparkly purple wallpaper"
      />
      {/* Linear Gradient Cover */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-900 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 to-purple-900/20"></div>

      <div className="w-11/12 sm:3/4 max-w-6xl flex flex-col items-center gap-6 drop-shadow-[0_0_50px_lightgray]">
        <div className="w-fit mx-auto mb-12 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 m-auto font-bold text-2xl h-fit text-black-shadow flex gap-5 justify-center items-center">
            <button className="p-4" onClick={() => changeSeason("prev")}>
              {"<"}
            </button>
            <h1>{`Season ${whichSeasonShowing}`}</h1>
            <button className="p-4" onClick={() => changeSeason("next")}>
              {">"}
            </button>
          </div>
          <Image src="/static/PurpleButtonsPointy.png" width={300} height={100} alt="purple background for the title" />
        </div>

        <div className="flex flex-col justify-start gap-3 min-h-[400px] lg:min-h-[600px]">
          <div className="flex gap-2 sm:gap-6 lg:mb-12">
            {/* May need to memoize here if the website gets bigger */}
            {nfts[`season${whichSeasonShowing}`].map((nft, i) => {
              return (
                <NFTCardBlock
                  nftObj={nft}
                  key={nft.address}
                  i={i}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
              );
            })}
          </div>

          <div className="text-left max-w-2xl bg-gray-500/40 rounded-3xl py-6 px-4 shadow-lg text-black-shadow lg:self-center relative z-10">
            <div className="flex gap-2">
              <h2>{`Biography ${
                nfts[`season${whichSeasonShowing}`][selected ? selected : 0].name
              }`}</h2>
              <div>
                {Array(nfts[`season${whichSeasonShowing}`][selected ? selected : 0].stars)
                  .fill(null)
                  .map((_, i) => {
                    return <StarIcon key={i}/>;
                  })}
                {5 - nfts[`season${whichSeasonShowing}`][selected ? selected : 0].stars > 0 &&
                  Array(5 - nfts[`season${whichSeasonShowing}`][selected ? selected : 0].stars)
                    .fill(null)
                    .map((_, i) => {
                      return <StarBorderIcon key={i}/>;
                    })}
              </div>
            </div>
            <div>
              <p className="leading-tight text-xs lg:text-sm text-gray-200">
                {nfts[`season${whichSeasonShowing}`][selected ? selected : 0].bio}
              </p>
            </div>
          </div>

          <div className="self-start lg:self-center">
            <div className="bg-blue-300 rounded-full py-1 px-3 flex items-center gap-1">
              <InfoIcon fontSize="small" />
              <p className="text-black text-xs">Unaccessable via Mystery Box</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 space-around text-xs">
          <div>
            <p className="py-1 px-2 bg-gray-200 rounded-full w-24">Common</p>
          </div>
          <div>
            <p className="py-1 px-2 bg-green-400 rounded-full w-24">Uncommon</p>
          </div>
          <div>
            <p className="py-1 px-2 bg-blue-400 rounded-full w-24">Rare</p>
          </div>
          <div>
            <p className="py-1 px-2 bg-red-500 rounded-full w-24">Epic</p>
          </div>
          <div>
            <p className="py-1 px-2 bg-orange-500 rounded-full w-24">Legendary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondBanner;
