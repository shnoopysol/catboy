import Image from "next/image";
import NavigationBar from "../components/NavigationBar";

function index() {
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

      <Image
        src="/static/raffleguy.svg"
        className="absolute bottom-0 left-0 z-0 lg:z-20"
        width={600}
        height={600}
        alt="raffle guy"
      />

      <Image
        src="/static/rafflechars.png"
        className="absolute right-0 bottom-0 z-20 hidden lg:block"
        width={200}
        height={200}
        alt="raffle characters"
      />
      <div className="w-full max-w-[750px] xl:max-w-[900px]  px-6 z-10 flex flex-col sm:flex-row justify-center gap-4 absolute top-[8%] lg:top-[10%] lg:right-[5%] drop-shadow-[0_0_50px_lightgray]">
        <div className="flex flex-col gap-1 sm:gap-2 flex-1 ">
          <div className="border-2 border-gray-900/40 bg-gradient-to-br from-pink-400/80 via-purple-500/80 to-purple-800/80 p-3 rounded-lg shadow-lg flex-1 relative min-h-[125px] sm:min-h-[250px] xl:min-h-[375px]">
            <Image src="/static/question_mark.svg" className=" object-bottom object-contain" fill alt="question mark icon" />
          </div>
          <h2 className="border-2 border-gray-900/40 bg-gradient-to-br from-pink-400/80 via-purple-500/80 to-purple-800/80 px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs text-black-shadow">
            Mystery gift
          </h2>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 flex-1">
          <div className="border-2 border-gray-900/40 bg-gradient-to-br from-pink-400/80 via-purple-500/80 to-purple-800/80 p-3 rounded-lg shadow-lg flex-1 relative min-h-[125px] sm:min-h-[250px] xl:min-h-[375px]">
            <Image src="/static/running_guy.svg" className="-ml-3 object-contain object-bottom" fill alt="running guy" />
          </div>
          <h2 className="border-2 border-gray-900/40 bg-gradient-to-br from-pink-400/80 via-purple-500/80 to-purple-800/80 px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs text-black-shadow">
            Uncommon NFT
          </h2>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 flex-1">
          <div className="border-2 border-gray-900/40 bg-gradient-to-br from-pink-400/80 via-purple-500/80 to-purple-800/80 rounded-lg shadow-lg flex-1 relative min-h-[125px] sm:min-h-[250px] xl:min-h-[375px]">
            <Image src="/static/CommonChibiRaffle.png" className="object-contain object-bottom" fill alt="chibi raffling" />
          </div>
          <h2 className="border-2 border-gray-900/40 bg-gradient-to-br from-pink-400/80 via-purple-500/80 to-purple-800/80 px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs text-black-shadow">
            Common NFT
          </h2>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 flex-1">
          <div className="border-2 border-gray-900/40 bg-gradient-to-br from-pink-400/80 via-purple-500/80 to-purple-800/80 rounded-lg shadow-lg flex-1 relative min-h-[125px] sm:min-h-[250px] xl:min-h-[375px]">
            <Image src="/static/WaifuChibiRaffle.png" className="-ml-3 object-contain object-bottom" fill alt="waifu chibi" />
          </div>
          <h2 className="border-2 border-gray-900/40 bg-gradient-to-br from-pink-400/80 via-purple-500/80 to-purple-800/80 px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs text-black-shadow">
            Waifu
          </h2>
        </div>
      </div>

      <div className="w-full px-6 z-10 flex flex-col gap-2 sm:gap-10 absolute bottom-0">
        <h1 className="uppercase text-yellow-400 font-black text-4xl font-merienda tracking-tighter">
          Chibi&apos;s Raffle
        </h1>
        <div className="bg-gradient-to-br from-pink-400/80 via-purple-500/80 to-purple-800/80 py-3 px-3 -mx-6">
          <h2 className="leading-tight text-black-shadow w-7/8 sm:w-2/6 xl:w-1/2 mx-auto mb-3 text-sm sm:text-base">
            Enter our exciting Chibi raffle for a chance to win amazing prizes! Buy tickets to
            increase your odds - the more tickets you buy, the higher you chances of winning! By
            minting a Chibi you get entered into the drawing.
          </h2>
          <p className="text-xs font-yellow-400 mx-auto">
            **Winners will be chosen at random among all entries received
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
