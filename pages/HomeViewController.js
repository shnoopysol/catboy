import { useRef, useState, useEffect } from "react";
import MainBanner from "./components/Home/MainBanner.js";
import FirstBanner from "./components/Home/FirstBanner.js";
import SecondBanner from "./components/Home/SecondBanner.js";
import ThirdBanner from "./components/Home/ThirdBanner.js";
import FourthBanner from "./components/Home/FourthBanner.js";
import FifthBanner from "./components/Home/FifthBanner.js";
import SixthBanner from "./components/Home/SixthBanner.js";
import SeventhBanner from "./components/Home/SeventhBanner.js";
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

  const [currentScrollY, setCurrentScrollY] = useState();

  useEffect(() => {
    const listenScrollEvent = (e) => {
      setCurrentScrollY(window.scrollY);
    }

    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

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
        <MainBanner mainBannerRef={mainBannerRef} currentScrollY={currentScrollY}/>
        <EmptySpaceBanner type={"main"}/>
        <FirstBanner ecosystemBannerRef={ecosystemBannerRef} />
        <SecondBanner nftBannerRef={nftBannerRef} />
        <EmptySpaceBanner type={"minor"} />
        <ThirdBanner roadmapBannerRef={roadmapBannerRef} />
        <EmptySpaceBanner type={"minor"} />
        <FourthBanner gentlemenBannerRef={gentlemenBannerRef} />
        <EmptySpaceBanner type={"minor"} />
        <FifthBanner teamBannerRef={teamBannerRef} />
        <EmptySpaceBanner type={"minor"} />
        <SixthBanner />
        <EmptySpaceBanner type={"main"} />
        <SeventhBanner />
      </div>
    </div>
  );
}

export default HomeViewController;
