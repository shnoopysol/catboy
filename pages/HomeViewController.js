import { useRef } from "react";
import MainBanner from "./components/Home/MainBanner.js";
import FirstBanner from "./components/Home/FirstBanner.js";
import SecondBanner from "./components/Home/SecondBanner.js";
import ThirdBanner from "./components/Home/ThirdBanner.js";
import FourthBanner from "./components/Home/FourthBanner.js";
import FifthBanner from "./components/Home/FifthBanner.js";
import SixthBanner from "./components/Home/SixthBanner.js";
import SeventhBanner from "./components/Home/SeventhBanner.js";
import EighthBanner from "./components/Home/EighthBanner.js";
import EmptySpaceBanner from "./components/Home/EmptySpaceBanner.js";
import NavigationBar from "./components/NavigationBar.js";

function HomeViewController() {
  const mainBannerRef = useRef();
  const ecosystemBannerRef = useRef();
  const mysteryBannerRef = useRef();
  const nftBannerRef = useRef();
  const roadmapBannerRef = useRef();
  const gentlemenBannerRef = useRef();
  const teamBannerRef = useRef();

  return (
    <div className="min-w-screen min-h-screen text-white bg-purple-800">
      <div>
        <NavigationBar
          nftBannerRef={nftBannerRef}
          ecosystemBannerRef={ecosystemBannerRef}
          mysteryBannerRef={mysteryBannerRef}
          roadmapBannerRef={roadmapBannerRef}
          gentlemenBannerRef={gentlemenBannerRef}
          teamBannerRef={teamBannerRef}
          mainBannerRef={mainBannerRef}
        />
        <MainBanner mainBannerRef={mainBannerRef}/>
        <EmptySpaceBanner />
        <FirstBanner ecosystemBannerRef={ecosystemBannerRef} />
        <SecondBanner mysteryBannerRef={mysteryBannerRef} />
        <ThirdBanner nftBannerRef={nftBannerRef} />
        <EmptySpaceBanner />
        <FourthBanner roadmapBannerRef={roadmapBannerRef} />
        <FifthBanner gentlemenBannerRef={gentlemenBannerRef} />
        <SixthBanner teamBannerRef={teamBannerRef} />
        <SeventhBanner />
        <EmptySpaceBanner />
        <EighthBanner />
      </div>
    </div>
  );
}

export default HomeViewController;
