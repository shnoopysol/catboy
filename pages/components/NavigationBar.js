import Image from "next/image";

function NavigationBar({
  nftBannerRef,
  ecosystemBannerRef,
  mysteryBannerRef,
  roadmapBannerRef,
  gentlemenBannerRef,
  teamBannerRef,
  mainBannerRef,
}) {
  const goToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 z-50 w-screen flex justify-between items-center px-3 bg-purple-800 shadow-xl">
      <div onClick={() => goToSection(mainBannerRef)} className="cursor-pointer hover:scale-105">
        <Image src="/static/TitleCatboy_cropped.png" width={50} height={50} alt="catboy logo" />
      </div>
      <nav className="font-bold uppercase font-merienda">
        <ul className="flex gap-3">
          <div onClick={() => goToSection(ecosystemBannerRef)} className="cursor-pointer hover:scale-105">
            <p className="py-2 px-3">Ecosystem</p>
          </div>
          <div onClick={() => goToSection(mysteryBannerRef)} className="cursor-pointer hover:scale-105">
            <p className="py-2 px-3">Mystery</p>
          </div>
          <div onClick={() => goToSection(nftBannerRef)} className="cursor-pointer hover:scale-105">
            <p className="py-2 px-3">NFTs</p>
          </div>
          <div onClick={() => goToSection(roadmapBannerRef)} className="cursor-pointer hover:scale-105">
            <p className="py-2 px-3">Roadmap</p>
          </div>
          <div onClick={() => goToSection(gentlemenBannerRef)} className="cursor-pointer hover:scale-105">
            <p className="py-2 px-3">Gentlemen's</p>
          </div>
          <div onClick={() => goToSection(teamBannerRef)} className="cursor-pointer hover:scale-105">
            <p className="py-2 px-3">Team</p>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
