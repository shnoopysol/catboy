import MysteryBoxItemBlock from "../MysteryBoxItemBlock";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function SecondBanner({ mysteryBannerRef }) {
  return (
    <div
      className="min-w-screen min-h-screen grid place-items-center uppercase text-center p-1 sm:p-6 relative"
      ref={mysteryBannerRef}
    >
      <Image
        src="/static/sparkly_background_flipped.svg"
        className="object-cover object-center z-0"
        fill
        priority
      />
      {/* Linear Gradient Cover */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-900 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 to-purple-900/20"></div>

      <div className="drop-shadow-[0_0_50px_lightgray]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-black-shadow font-merienda">Mystery Box</h1>
        <div className="bg-blue-500 my-10">
          <Carousel
            showArrows
            showThumbs={false}
            autoPlay
            infiniteLoop
            emulateTouch
            interval={6000}
          >
            <div className="w-full h-32 sm:h-72">
              <Image className="object-cover object-center" src="/static/placeholder.jpg" fill />
            </div>
            <div>
              <Image className="object-cover object-center" src="/static/placeholder.jpg" fill />
            </div>
            <div>
              <Image className="object-cover object-center" src="/static/placeholder.jpg" fill />
            </div>
            <div>
              <Image className="object-cover object-center" src="/static/placeholder.jpg" fill />
            </div>
          </Carousel>
        </div>
        <div className="w-full h-32 grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 grid-flow-row">
          <MysteryBoxItemBlock name={"BOOSTER KEY"} imageSrc={"/static/placeholder.jpg"} />
          <MysteryBoxItemBlock name={"INVENTORY"} imageSrc={"/static/placeholder.jpg"} />
          <MysteryBoxItemBlock name={"MARKETPLACE"} imageSrc={"/static/placeholder.jpg"} />
          <MysteryBoxItemBlock name={"UPGRADE MACHINE"} imageSrc={"/static/placeholder.jpg"} />
          <MysteryBoxItemBlock name={"COLLECTORS BOOK"} imageSrc={"/static/placeholder.jpg"} />
          <MysteryBoxItemBlock name={"STAKING"} imageSrc={"/static/placeholder.jpg"} />
          <MysteryBoxItemBlock name={"MYSTERY BOX"} imageSrc={"/static/placeholder.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default SecondBanner;
