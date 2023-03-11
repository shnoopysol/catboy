import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MysteryBoxItemBlock from "../components/Home/MysteryBoxItemBlock";
import NavigationBar from "../components/NavigationBar";

function index() {
  return (
    <div className="min-w-screen min-h-screen grid lg:place-items-center uppercase text-center py-16 relative text-white">
      <Image
        src="/static/sparkly_background_flipped.svg"
        className="object-cover object-center z-0"
        fill
        priority
        alt="sparkly purple wallpaper"
      />
      {/* Linear Gradient Cover */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-900 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 to-purple-900/20"></div>

      <NavigationBar />

      <div className="flex flex-col gap-10 drop-shadow-[0_0_50px_lightgray]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-black-shadow font-merienda order-2 lg:order-1">
          Mystery Box
        </h1>
        <div className="order-1 lg:order-2 border-2 border-gray-900">
          <Carousel
            showArrows
            showThumbs={false}
            autoPlay
            infiniteLoop
            emulateTouch
            interval={6000}
          >
            <div className="w-full h-40 sm:h-80">
              <Image
                className="object-cover object-center"
                src="/static/placeholder.jpg"
                fill
                alt="first carousel item"
              />
            </div>
            <div>
              <Image
                className="object-cover object-center"
                src="/static/placeholder.jpg"
                fill
                alt="second carousel item"
              />
            </div>
            <div>
              <Image
                className="object-cover object-center"
                src="/static/placeholder.jpg"
                fill
                alt="third carousel item"
              />
            </div>
            <div>
              <Image
                className="object-cover object-center"
                src="/static/placeholder.jpg"
                fill
                alt="fourth carousel item"
              />
            </div>
          </Carousel>
        </div>
        <div className="w-full h-32 grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-flow-row order-3 gap-2">
          <MysteryBoxItemBlock name={"BOOSTER KEY"} imageSrc={"/static/catboy_key.svg"} />
          <MysteryBoxItemBlock name={"INVENTORY"} imageSrc={"/static/box.svg"} />
          <MysteryBoxItemBlock name={"MARKETPLACE"} imageSrc={"/static/marketplace.svg"} />
          <MysteryBoxItemBlock name={"UPGRADE MACHINE"} imageSrc={"/static/treasure_chest.svg"} />
          <MysteryBoxItemBlock name={"COLLECTORS BOOK"} imageSrc={"/static/book.svg"} />
          <MysteryBoxItemBlock name={"STAKING"} imageSrc={"/static/money_bag.svg"} />
          <MysteryBoxItemBlock name={"MYSTERY BOX"} imageSrc={"/static/MysteryBoxImage.svg"} />
        </div>
      </div>
    </div>
  );
}

export default index;
