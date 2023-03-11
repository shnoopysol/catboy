import React from "react";
import Image from "next/image";
import NavigationBar from "../components/NavigationBar";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function index() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(process.env.CATBOY_CONTRACT_ADDRESS);
  };

  return (
    <div className="min-w-screen min-h-screen grid place-items-center text-center py-20 px-3 sm:px-6 relative text-white">
      <Image
        src="/static/sparkly_background.svg"
        className="object-cover object-center"
        fill
        priority
        alt="sparkly purple wallpaper"
      />
      {/* Linear Gradient Cover */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-900 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 to-purple-900/20"></div>

      <NavigationBar />

      <div className="w-full h-full px-6 z-20 flex flex-col gap-10">
        <div className="z-20 w-full">
          <h1 className="font-bold text-xl sm:text-2xl text-black-shadow">Catboy Statistics</h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mx-auto z-20 w-full">
          <div>
            <Image src="/static/piechart.svg" className="mx-auto" width={200} height={200} alt="pie chart" />
          </div>
          <div className="bg-gray-500/30 grid place-items-center px-10 py-4 text-left">
            <div>
              <div className="mb-3">
                <h2>Total Supply</h2>
                <p className="text-2xl font-bold">100&apos;000&apos;000</p>
              </div>
              <div>
                <h2>Liquidity Locked</h2>
                <p className="text-2xl font-bold">27&apos;000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 z-20 w-full lg:w-3/4 xl:w-1/2 mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 p-3 flex-1 rounded-sm shadow-md">
            <h2 className="text-xs uppercase font-bold">Catboy Holders</h2>
            <p className="text-4xl font-bold tracking-wider">6000</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 p-3 flex-1 rounded-sm shadow-md">
            <h2 className="text-xs uppercase font-bold">NFT Holders</h2>
            <p className="text-4xl font-bold tracking-wider">7061</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 p-3 flex-1 rounded-sm shadow-md">
            <h2 className="text-xs uppercase font-bold">Mystery Box Opened</h2>
            <p className="text-4xl font-bold tracking-wider">5000</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-10 bg-cyan-500/70 p-3 z-20 -mx-20 sm:gap-20">
          <div>
            <h2 className="font-bold uppercase text-black-shadow">Contract Address</h2>
            <div className="flex gap-3 hover:scale-90 cursor-pointer justify-center" onClick={copyToClipboard}>
              <p className="font-thin">{`${process.env.CATBOY_CONTRACT_ADDRESS.substring(
                0,
                10
              )}...`}</p>
              <ContentCopyIcon className="text-gray-700" fontSize="small" />
            </div>
          </div>
          <div>
            <button className="bg-blue-700/80 py-3 px-3 rounded-full font-semibold sm:text-base w-full">
              Buy Catboy
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3">
          <Image
            className="fixed -bottom-20 -left-5 z-0 w-auto"
            src="/static/GraphicHaruDesk.png"
            width={450}
            height={700}
            alt="graphic haru desk"
            priority
          />
          <div className="sm:row-start-2 sm:row-end-4 sm:col-start-2 sm:col-end-4 flex flex-col sm:flex-row sm:justify-center  gap-6 sm:gap-4 z-20">
            <div className="sm:flex-1 mx-auto">
              <h2 className="bg-blue-700/60 py-2 px-3 rounded-full font-semibold mb-3 text-black-shadow">
                Liquidity
              </h2>
              <p className="text-xs sm:text-sm font-bold sm:font-normal text-black-shadow text-gray-200 max-w-sm mx-auto">
                2% of each sell will be added to the Liquidity to create an ever-increasing price
                floor
              </p>
            </div>
            <div className="sm:flex-1 mx-auto">
              <h2 className="bg-blue-700/60 py-2 px-3 rounded-full font-semibold mb-3 text-black-shadow">
                Marketing
              </h2>
              <p className="text-xs sm:text-sm font-bold sm:font-normal text-black-shadow text-gray-200 max-w-xs mx-auto">
                4% of all transactions will be used for marketing and third-hand expenses to
                establish the project more globally.
              </p>
            </div>
            <div className="sm:flex-1 mx-auto">
              <h2 className="bg-blue-700/60 py-2 px-3 rounded-full font-semibold mb-3 text-black-shadow">Staking</h2>
              <p className="text-xs sm:text-sm font-bold sm:font-normal text-black-shadow text-gray-200 mx-auto">
                1% of all transactions will be used as redistribution funds for the staking pool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
