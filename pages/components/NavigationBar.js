import Image from "next/image";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function NavigationBar({
  nftBannerRef,
  ecosystemBannerRef,
  mysteryBannerRef,
  roadmapBannerRef,
  gentlemenBannerRef,
  teamBannerRef,
  mainBannerRef,
}) {
  const router = useRouter();

  /* For traversing the Home Page */
  const goToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(process.env.CATBOY_CONTRACT_ADDRESS);
  };

  return (
    <div className="fixed top-0 left-0 right-0 sm:right-auto sm:bottom-0 z-50 p-3 sm:py-3 sm:px-2 bg-[#fdf8f5] shadow-xl sm:border-r-2 sm:border-b-0 border-[#ede3d7] border-b-2  text-gray-700 font-semibold">
      {/* 
      MOBILE VIEW
    */}
      <div className="sm:hidden cursor-pointer p-1 group">
        <div className="flex justify-between items-start group-hover:mb-6">
          <Image src="/static/catboy_logo_2.svg" width={25} height={25} alt="round Catboy logo" />
          <MenuIcon className="text-gray-700" />
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="bg-[#ede3d7] p-3 gap-2 mx-auto rounded-full  w-full cursor-pointer hidden group-hover:flex"
            onClick={() => router.push("/")}
          >
            <Image
              className="opacity-40"
              src="/static/system/home.png"
              width={25}
              height={25}
              alt="home icon"
            />
            <p>Home</p>
          </div>
          <div
            className="bg-[#ede3d7] p-3 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex"
            onClick={() => router.push("/mysterybox")}
          >
            <Image
              className="opacity-40"
              src="/static/system/gift.png"
              width={25}
              height={25}
              alt="mystery box icon"
            />
            <p>Mystery Box</p>
          </div>
          <div
            className="bg-[#ede3d7] p-3 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex"
            onClick={() => router.push("/battle")}
          >
            <Image
              className="opacity-40"
              src="/static/system/sword.png"
              width={25}
              height={25}
              alt="battle icon"
            />
            <p>Battle</p>
          </div>
          <div
            className="bg-[#ede3d7] p-3 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex"
            onClick={() => router.push("/statistics")}
          >
            <Image
              className="opacity-40"
              src="/static/system/pie-chart.png"
              width={25}
              height={25} alt="stats icon"
            />
            <p>Statistics</p>
          </div>
          <div
            className="bg-[#ede3d7] p-3 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex"
            onClick={() => router.push("/raffle")}
          >
            <Image className="opacity-40" src="/static/system/ticket.png" width={25} height={25}  alt="raffle icon"/>
            <p>Raffle</p>
          </div>
          <div className="hidden group-hover:block">
            <h2 className="font-bold">Information</h2>
          </div>
          <div className="bg-[#ede3d7] px-3 py-1 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex">
            <p>Whitepaper</p>
          </div>
          <div className="bg-[#ede3d7] px-3 py-1 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex">
            <p>Audit</p>
          </div>
          <div className="bg-[#ede3d7] px-3 py-1 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex">
            <p>Liquidity Lock</p>
          </div>
          <div className="hidden group-hover:block">
            <h2 className="font-bold">Dapp</h2>
          </div>
          <div className="bg-[#ede3d7] px-3 py-1 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex">
            <p>Link</p>
          </div>
          <div className="hidden group-hover:block">
            <h2 className="font-bold">Contract Address</h2>
            <div
              className="flex gap-3 hover:scale-90 cursor-pointer justify-center"
              onClick={copyToClipboard}
            >
              <p className="font-thin">{`${process.env.CATBOY_CONTRACT_ADDRESS.substring(
                0,
                10
              )}...`}</p>
              <ContentCopyIcon className="text-gray-700" fontSize="small" />
            </div>
          </div>
        </div>
      </div>

      {/* 
      Desktop view
    */}
      <div className="hidden sm:block sm:hover:w-52 group">
        <Image className="mb-5 mx-auto" src="/static/catboy_logo_2.svg" width={50} height={50}  alt="alternative round catboy icon"/>
        <div className="flex flex-col gap-2">
          <div
            className="bg-[#ede3d7] hover:bg-[#d7b892] p-3 gap-2 mx-auto rounded-full flex w-full cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image className="opacity-40" src="/static/system/home.png" width={25} height={25}  alt="home icon"/>
            <p className="hidden group-hover:block">Home</p>
          </div>
          <div
            className="bg-[#ede3d7] hover:bg-[#d7b892] p-3 gap-2 mx-auto rounded-full flex w-full cursor-pointer"
            onClick={() => router.push("/mysterybox")}
          >
            <Image className="opacity-40" src="/static/system/gift.png" width={25} height={25}  alt="mystery box icon"/>
            <p className="hidden group-hover:block">Mystery Box</p>
          </div>
          <div
            className="bg-[#ede3d7] hover:bg-[#d7b892] p-3 gap-2 mx-auto rounded-full flex w-full cursor-pointer"
            onClick={() => router.push("/battle")}
          >
            <Image className="opacity-40" src="/static/system/sword.png" width={25} height={25}  alt="battle icon"/>
            <p className="hidden group-hover:block">Battle</p>
          </div>
          <div
            className="bg-[#ede3d7] hover:bg-[#d7b892] p-3 gap-2 mx-auto rounded-full flex w-full cursor-pointer"
            onClick={() => router.push("/statistics")}
          >
            <Image
              className="opacity-40"
              src="/static/system/pie-chart.png"
              width={25}
              height={25} alt="stats icon"
            />
            <p className="hidden group-hover:block">Statistics</p>
          </div>
          <div
            className="bg-[#ede3d7] hover:bg-[#d7b892] p-3 gap-2 mx-auto rounded-full flex w-full cursor-pointer"
            onClick={() => router.push("/raffle")}
          >
            <Image className="opacity-40" src="/static/system/ticket.png" width={25} height={25}  alt="raffle icon"/>
            <p className="hidden group-hover:block">Raffle</p>
          </div>
          <div className="hidden group-hover:block">
            <h2 className="font-bold">Information</h2>
          </div>
          <div className="bg-[#ede3d7] hover:bg-[#d7b892] px-3 py-1 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex">
            <p>Whitepaper</p>
          </div>
          <div className="bg-[#ede3d7] hover:bg-[#d7b892] px-3 py-1 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex">
            <p>Audit</p>
          </div>
          <div className="bg-[#ede3d7] hover:bg-[#d7b892] px-3 py-1 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex">
            <p>Liquidity Lock</p>
          </div>
          <div className="hidden group-hover:block">
            <h2 className="font-bold">Dapp</h2>
          </div>
          <div className="bg-[#ede3d7] hover:bg-[#d7b892] px-3 py-1 gap-2 mx-auto rounded-full w-full cursor-pointer hidden group-hover:flex">
            <p>Link</p>
          </div>
          <div className="hidden group-hover:block py-5">
            <h2 className="font-bold">Contract Address</h2>
            <div
              className="flex gap-3 hover:scale-90 cursor-pointer justify-center"
              onClick={copyToClipboard}
            >
              <p className="font-thin">{`${process.env.CATBOY_CONTRACT_ADDRESS.substring(
                0,
                10
              )}...`}</p>
              <ContentCopyIcon className="text-gray-700" fontSize="small" />
            </div>
          </div>
        </div>
      </div>

      {/* 
        FOR NAVIGATING THROUGH THE HOME PAGE
      */}
      {/* <nav className="font-bold uppercase font-merienda">
        <ul className="flex gap-3">
          <div
            onClick={() => goToSection(ecosystemBannerRef)}
            className="cursor-pointer hover:scale-105"
          >
            <p className="py-2 px-3">Ecosystem</p>
          </div>
          <div
            onClick={() => goToSection(mysteryBannerRef)}
            className="cursor-pointer hover:scale-105"
          >
            <p className="py-2 px-3">Mystery</p>
          </div>
          <div onClick={() => goToSection(nftBannerRef)} className="cursor-pointer hover:scale-105">
            <p className="py-2 px-3">NFTs</p>
          </div>
          <div
            onClick={() => goToSection(roadmapBannerRef)}
            className="cursor-pointer hover:scale-105"
          >
            <p className="py-2 px-3">Roadmap</p>
          </div>
          <div
            onClick={() => goToSection(gentlemenBannerRef)}
            className="cursor-pointer hover:scale-105"
          >
            <p className="py-2 px-3">Gentlemen&apos;s</p>
          </div>
          <div
            onClick={() => goToSection(teamBannerRef)}
            className="cursor-pointer hover:scale-105"
          >
            <p className="py-2 px-3">Team</p>
          </div>
        </ul>
      </nav> */}
    </div>
  );
}

export default NavigationBar;
