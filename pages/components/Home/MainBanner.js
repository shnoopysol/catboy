import Image from "next/image";

function MainBanner({ mainBannerRef, currentScrollY }) {
  return (
    <div
      className={`w-screen h-screen flex flex-col-reverse p-3 sm:p-6 relative`}
      ref={mainBannerRef}
    >
      <div className={`absolute top-0 bottom-0 left-0 right-0`} style={{ bottom: `${currentScrollY ? currentScrollY / 50 : 0}%` }}>
        <Image
          className={`object-cover object-bottom z-0`}
          // style={{ bottom: `${currentScrollY / 5}%` }}
          src="/static/cherry_blossoms.svg"
          fill
          priority
        />
      </div>
      <Image
        className="object-cover object-top z-0"
        src="/static/catboys_background.svg"
        fill
        priority
        alt="website wallpaper"
      />
      <div className="bg-gradient-to-b from-transparent to-purple-900 absolute top-[50%] left-0 right-0 bottom-0"></div>
      <div className="w-full flex flex-col items-center gap-4 py-3 sm:py-10 z-10">
        <Image
          src="/static/TitleCatboy_cropped.png"
          className="hover:animate-anime-jump cursor-pointer"
          width={500}
          height={500}
          priority
          alt="website main logo"
        />
        <h2 className="text-base font-black sm:text-xl md:text-2xl font-merienda">
          Once a catboy, always a catboy
        </h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xs sm:max-w-sm">
          <button className="w-full border-2 border-yellow-400 rounded-full py-2 text-yellow-400 font-bold bg-gradient-to-b from-purple-900 to-purple-700 hover:to-purple-600 mx-auto">
            Buy Catboy
          </button>
          <button className="w-full border-2 border-yellow-400 rounded-full py-2 text-yellow-400 font-bold bg-gradient-to-b from-purple-900 to-purple-700 hover:to-purple-600 mx-auto">
            DApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
