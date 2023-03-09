import Image from "next/image";

/* 
  Gentlemen's Club
*/
function FifthBanner({ gentlemenBannerRef }) {
  return (
    <div
      className="min-w-screen min-h-screen grid place-items-center text-center relative"
      ref={gentlemenBannerRef}
    >
      <Image
        className="object-cover object-center z-0"
        src="/static/GentlemensClubBackground.svg"
        fill
        priority
        alt="roadmap wallpaper"
      />

      {/* Linear Gradient Cover */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-[70%] bg-gradient-to-b via-transparent from-purple-900 to-transparent z-50"></div>
      <div className="absolute top-[70%] left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent z-50"></div> */}
      <Image
        className="absolute bottom-0 right-0 z-10"
        src="/static/GirlGraphicGentlemen.png"
        width={400}
        height={400}
        alt="girl graphic Gentlemen"
      />
      <Image
        className="absolute bottom-0 left-0 z-10 invisible sm:visible"
        src="/static/GraphicHaruGentlemen.png"
        width={300}
        height={300}
        alt="guy graphic Gentlemen"
      />
      <div className="w-11/12 pb-60 sm:3/4 max-w-6xl flex flex-col items-center z-10 lg:z-0">
        <Image src="/static/TitleGentlemensClub.png" width={400} height={400} />
        <div className="max-w-lg xl:max-w-2xl bg-gray-500/40 rounded-3xl py-6 px-4 shadow-lg mb-10 text-black-shadow text-gray-200">
          <p className="text-sm lg:text-base">
            The Catboy Gentlemen's Club is an exclusive, members only club for the creme de la creme
            of cat lovers. It's an exclusive membership of distinguished eaters who share the same
            core values of trust, respect, and loyalty. With hand-picked top members from our
            community around the world. Become part of this prestigious community today by joining
            the Catboy Gentlemen's Club!
          </p>
        </div>
        <div className="w-screen bg-amber-50/80 py-4 flex justify-center gap-1 sm:gap-3 lg:gap-5 items-center text-black">
          <div>
            <h2 className="font-merienda font-black leading-tight text-xs sm:text-sm lg:text-lg">
              Korukinshi
            </h2>
            <p className="font-semibold leading-tight text-[10px] lg:text-xs">@korukisnu</p>
          </div>
          <div>
            <h2 className="font-merienda font-black leading-tight text-xs sm:text-sm lg:text-lg">
              Selina
            </h2>
            <p className="font-semibold leading-tight text-[10px] lg:text-xs">@flowerselina</p>
          </div>
          <div>
            <h2 className="font-merienda font-black leading-tight text-xs sm:text-sm lg:text-lg">
              Winslow
            </h2>
            <p className="font-semibold leading-tight text-[10px] lg:text-xs">@Winslowbankz</p>
          </div>
          <div>
            <h2 className="font-merienda font-black leading-tight text-xs sm:text-sm lg:text-lg">
              Bene
            </h2>
            <p className="font-semibold leading-tight text-[10px] lg:text-xs">@bennegj</p>
          </div>
          <div>
            <h2 className="font-merienda font-black leading-tight text-xs sm:text-sm lg:text-lg">
              Matt
            </h2>
            <p className="font-semibold leading-tight text-[10px] lg:text-xs">@Mctwen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthBanner;
