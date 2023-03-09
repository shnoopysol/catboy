import RoadmapItemBlocks from "./RoadmapItemBlocks";
import Image from "next/image";

/* 
  Roadmap
*/
function FourthBanner({ roadmapBannerRef }) {
  return (
    <div
      className="min-w-screen min-h-screen grid place-items-center uppercase text-center p-3 sm:p-6 relative"
      ref={roadmapBannerRef}
    >
      <Image
        className="object-cover object-center z-0"
        src="/static/RoadmapBackground.svg"
        fill
        priority
        alt="roadmap wallpaper"
      />
      {/* Linear Gradient Cover */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-[70%] bg-gradient-to-b from-purple-900 via-transparent to-transparent"></div>
      <div className="absolute top-[70%] left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent"></div> */}
      <div className="w-11/12 sm:3/4 max-w-6xl z-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-10 text-black-shadow font-merienda">
          Roadmap
        </h1>
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 grid-rows-5 col-start-1 col-end-4 lg:col-end-3">
            <RoadmapItemBlocks title={"New v3 Smart Contract"} />
            <RoadmapItemBlocks title={"Contract Audit"} />
            <RoadmapItemBlocks title={"Affiliate Program"} />
            <RoadmapItemBlocks title={"Season 2 NFT Collection"} />
            <RoadmapItemBlocks title={"Website revamp"} />
            <RoadmapItemBlocks title={"Merchandise shop"} />
            <RoadmapItemBlocks title={"Token Staking"} />
            <RoadmapItemBlocks title={"Upgrade Machine Release"} />
            <RoadmapItemBlocks title={"Coming Soon.."} />
            <RoadmapItemBlocks title={"Coming Soon.."} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthBanner;
