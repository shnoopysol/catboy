import { useState, useEffect } from "react";
import Image from "next/image";
import NFTCardBlock from "./NFTCardBlock";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import nfts from "@/scripts/nfts";

function ThirdBanner({ nftBannerRef }) {
  const [selected, setSelected] = useState();
  const [selectedDivRef, setSelectedDivRef] = useState();
  const [whichSeasonShowing, setWhichSeasonShowing] = useState(1);

  const changeSeason = (_season) => {
    setWhichSeasonShowing(_season);
  };

  return (
    <div
      className="min-w-screen min-h-screen grid place-items-center text-center p-1 sm:p-6 relative"
      ref={nftBannerRef}
    >
      <Image
        src="/static/sparkly_background.svg"
        className="object-cover object-center z-0"
        fill
        priority
      />
      {/* Linear Gradient Cover */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-900 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 to-purple-900/20"></div>

      <div className="w-11/12 sm:3/4 max-w-6xl flex flex-col items-center gap-6 drop-shadow-[0_0_50px_lightgray]">
        {/* Season 1 */}
        {whichSeasonShowing === 1 && (
          <>
            <div className="w-fit mx-auto mb-20 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 m-auto font-bold text-2xl h-fit text-black-shadow flex gap-5 justify-center items-center">
                <button className="p-4" onClick={() => changeSeason(1)}>
                  {"<"}
                </button>
                <h1>Season One</h1>
                <button className="p-4" onClick={() => changeSeason(2)}>
                  {">"}
                </button>
              </div>
              <Image src="/static/PurpleButtonsPointy.png" width={300} height={100} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-6">
                {/* This should be dynamically imported from db */}
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[0]}
                  i={0}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[1]}
                  i={1}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[2]}
                  i={2}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[3]}
                  i={3}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
              </div>
              <div className="text-left max-w-2xl">
                <div className="flex gap-2">
                  <h2>{`Biography ${nfts[selected ? selected : 0].name}`}</h2>
                  <div>
                    {Array(nfts[selected ? selected : 0].stars)
                      .fill(null)
                      .map((item) => {
                        return <StarIcon />;
                      })}
                    {5 - nfts[selected ? selected : 0].stars > 0 &&
                      Array(5 - nfts[selected ? selected : 0].stars)
                        .fill(null)
                        .map((item) => {
                          return <StarBorderIcon />;
                        })}
                  </div>
                </div>
                <div>
                  <p className="leading-tight text-xs text-gray-300">
                    {nfts[selected ? selected : 0].bio}
                  </p>
                </div>
              </div>
              <div className="self-start">
                <div className="bg-blue-300 rounded-full py-1 px-3 flex items-center gap-1">
                  <InfoIcon fontSize="small" />
                  <p className="text-black text-xs">Unaccessable via Mystery Box</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Season 2 */}
        {whichSeasonShowing === 2 && (
          <>
            <div className="w-fit mx-auto mb-20 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 m-auto font-bold text-2xl h-fit text-black-shadow flex gap-5 justify-center items-center">
                <button className="p-4" onClick={() => changeSeason(1)}>
                  {"<"}
                </button>
                <h1>Season Two</h1>
                <button className="p-4" onClick={() => changeSeason(3)}>
                  {">"}
                </button>
              </div>
              <Image src="/static/PurpleButtonsPointy.png" width={300} height={100} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-6">
                {/* This should be dynamically imported from db */}
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[0]}
                  i={0}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[1]}
                  i={1}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[2]}
                  i={2}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[3]}
                  i={3}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
              </div>
              <div className="text-left max-w-2xl">
                <div className="flex gap-2">
                  <h2>{`Biography ${nfts[selected ? selected : 0].name}`}</h2>
                  <div>
                    {Array(nfts[selected ? selected : 0].stars)
                      .fill(null)
                      .map((item) => {
                        return <StarIcon />;
                      })}
                    {5 - nfts[selected ? selected : 0].stars > 0 &&
                      Array(5 - nfts[selected ? selected : 0].stars)
                        .fill(null)
                        .map((item) => {
                          return <StarBorderIcon />;
                        })}
                  </div>
                </div>
                <div>
                  <p className="leading-tight text-xs text-gray-300">
                    {nfts[selected ? selected : 0].bio}
                  </p>
                </div>
              </div>
              <div className="self-start">
                <div className="bg-blue-300 rounded-full py-1 px-3 flex items-center gap-1">
                  <InfoIcon fontSize="small" />
                  <p className="text-black text-xs">Unaccessable via Mystery Box</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Season 3 */}
        {whichSeasonShowing === 3 && (
          <>
            <div className="w-fit mx-auto mb-20 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 m-auto font-bold text-2xl h-fit text-black-shadow flex gap-5 justify-center items-center">
                <button className="p-4" onClick={() => changeSeason(2)}>
                  {"<"}
                </button>
                <h1>Season Three</h1>
                <button className="p-4" onClick={() => changeSeason(4)}>
                  {">"}
                </button>
              </div>
              <Image src="/static/PurpleButtonsPointy.png" width={300} height={100} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-6">
                {/* This should be dynamically imported from db */}
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[0]}
                  i={0}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[1]}
                  i={1}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[2]}
                  i={2}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[3]}
                  i={3}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
              </div>
              <div className="text-left max-w-2xl">
                <div className="flex gap-2">
                  <h2>{`Biography ${nfts[selected ? selected : 0].name}`}</h2>
                  <div>
                    {Array(nfts[selected ? selected : 0].stars)
                      .fill(null)
                      .map((item) => {
                        return <StarIcon />;
                      })}
                    {5 - nfts[selected ? selected : 0].stars > 0 &&
                      Array(5 - nfts[selected ? selected : 0].stars)
                        .fill(null)
                        .map((item) => {
                          return <StarBorderIcon />;
                        })}
                  </div>
                </div>
                <div>
                  <p className="leading-tight text-xs text-gray-300">
                    {nfts[selected ? selected : 0].bio}
                  </p>
                </div>
              </div>
              <div className="self-start">
                <div className="bg-blue-300 rounded-full py-1 px-3 flex items-center gap-1">
                  <InfoIcon fontSize="small" />
                  <p className="text-black text-xs">Unaccessable via Mystery Box</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Season 4 */}
        {whichSeasonShowing === 4 && (
          <>
            <div className="w-fit mx-auto mb-20 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 m-auto font-bold text-2xl h-fit text-black-shadow flex gap-5 justify-center items-center">
                <button className="p-4" onClick={() => changeSeason(3)}>
                  {"<"}
                </button>
                <h1>Season Four</h1>
                <button className="p-4" onClick={() => changeSeason(5)}>
                  {">"}
                </button>
              </div>
              <Image src="/static/PurpleButtonsPointy.png" width={300} height={100} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-6">
                {/* This should be dynamically imported from db */}
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[0]}
                  i={0}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[1]}
                  i={1}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[2]}
                  i={2}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[3]}
                  i={3}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
              </div>
              <div className="text-left max-w-2xl">
                <div className="flex gap-2">
                  <h2>{`Biography ${nfts[selected ? selected : 0].name}`}</h2>
                  <div>
                    {Array(nfts[selected ? selected : 0].stars)
                      .fill(null)
                      .map((item) => {
                        return <StarIcon />;
                      })}
                    {5 - nfts[selected ? selected : 0].stars > 0 &&
                      Array(5 - nfts[selected ? selected : 0].stars)
                        .fill(null)
                        .map((item) => {
                          return <StarBorderIcon />;
                        })}
                  </div>
                </div>
                <div>
                  <p className="leading-tight text-xs text-gray-300">
                    {nfts[selected ? selected : 0].bio}
                  </p>
                </div>
              </div>
              <div className="self-start">
                <div className="bg-blue-300 rounded-full py-1 px-3 flex items-center gap-1">
                  <InfoIcon fontSize="small" />
                  <p className="text-black text-xs">Unaccessable via Mystery Box</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Season 5 */}
        {whichSeasonShowing === 5 && (
          <>
            <div className="w-fit mx-auto mb-20 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 m-auto font-bold text-2xl h-fit text-black-shadow flex gap-5 justify-center items-center">
                <button className="p-4" onClick={() => changeSeason(4)}>
                  {"<"}
                </button>
                <h1>Season Five</h1>
                <button className="p-4" onClick={() => changeSeason(5)}>
                  {">"}
                </button>
              </div>
              <Image src="/static/PurpleButtonsPointy.png" width={300} height={100} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-6">
                {/* This should be dynamically imported from db */}
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[0]}
                  i={0}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[1]}
                  i={1}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[2]}
                  i={2}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
                <NFTCardBlock
                  rarity={"common"}
                  imageSrc={"/static/placeholder.jpg"}
                  bgColor={"#243c5a"}
                  nftObj={nfts[3]}
                  i={3}
                  setSelected={setSelected}
                  setSelectedDivRef={setSelectedDivRef}
                  selectedDivRef={selectedDivRef}
                />
              </div>
              <div className="text-left max-w-2xl">
                <div className="flex gap-2">
                  <h2>{`Biography ${nfts[selected ? selected : 0].name}`}</h2>
                  <div>
                    {Array(nfts[selected ? selected : 0].stars)
                      .fill(null)
                      .map((item) => {
                        return <StarIcon />;
                      })}
                    {5 - nfts[selected ? selected : 0].stars > 0 &&
                      Array(5 - nfts[selected ? selected : 0].stars)
                        .fill(null)
                        .map((item) => {
                          return <StarBorderIcon />;
                        })}
                  </div>
                </div>
                <div>
                  <p className="leading-tight text-xs text-gray-300">
                    {nfts[selected ? selected : 0].bio}
                  </p>
                </div>
              </div>
              <div className="self-start">
                <div className="bg-blue-300 rounded-full py-1 px-3 flex items-center gap-1">
                  <InfoIcon fontSize="small" />
                  <p className="text-black text-xs">Unaccessable via Mystery Box</p>
                </div>
              </div>
            </div>
          </>
        )}

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

export default ThirdBanner;
