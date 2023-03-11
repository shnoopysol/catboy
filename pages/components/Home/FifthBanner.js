import Image from "next/image";

/* 
  Team
*/
function FifthBanner({ teamBannerRef }) {
  return (
    <div
      className="min-w-screen min-h-screen grid place-items-center text-center p-6 relative"
      ref={teamBannerRef}
    >
      <Image
        className="object-cover object-center z-0"
        src="/static/TeamBackground.svg"
        fill
        priority
        alt="team background wallpaper"
      />
      {/* Linear Gradient Cover */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-[70%] bg-gradient-to-b from-purple-900 via-transparent to-transparent"></div>
      <div className="absolute top-[70%] left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent"></div> */}
      <div className="w-11/12 sm:3/4 max-w-6xl min-h-[750px] z-10">
        <div className="w-fit mx-auto mb-20 relative">
          <Image src="/static/PurpleButton.png" width={300} height={100} alt="purple title background"/>
          <h1 className="absolute top-0 left-0 right-0 bottom-0 m-auto font-bold text-2xl h-fit text-black-shadow">
            Meet the team
          </h1>
        </div>
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 col-start-1 col-end-4 lg:col-end-3 gap-5 sm:gap-0 font-black uppercase">
            <div className="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 sm:scale-125 mx-auto">
              <div className="mb-3">
                <h2 className="leading-none text-black-shadow">Bene</h2>
                <h3 className="leading-none text-black-shadow">Founder</h3>
              </div>
              <Image
                src="/static/BeneProfile.png"
                width={300}
                height={300}
                alt="bene's profile pic"
              />
              <div></div>
            </div>
            <div className="sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:scale-125 mx-auto">
              <div className="mb-3">
                <h2 className="leading-none text-black-shadow">CJ</h2>
                <h3 className="leading-none text-black-shadow">CFO</h3>
              </div>
              <Image src="/static/CJProfile.png" width={300} height={300} alt="CJ's profile pic" />
              <div></div>
            </div>
            <div className="sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:scale-125 mx-auto">
              <div className="mb-3">
                <h2 className="leading-none text-black-shadow">Selina</h2>
                <h3 className="leading-none text-black-shadow">Co-owner</h3>
              </div>
              <Image
                src="/static/selinaProfile.png"
                width={300}
                height={300}
                alt="Selina's profile pic"
              />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthBanner;
