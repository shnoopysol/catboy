import Image from "next/image";
import EcosystemItemBlock from "./EcosystemItemBlock";

function FirstBanner({ ecosystemBannerRef }) {
  return (
    <div
      className="min-w-screen min-h-screen grid place-items-center uppercase text-center p-3 sm:p-6 relative"
      ref={ecosystemBannerRef}
    >
      <Image src="/static/sparkly_background.svg" className="object-cover object-right-top z-0" fill priority alt="sparkly purple wallpaper"/>
      {/* Linear Gradient Cover */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-900 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 to-purple-900/20"></div>
      <div className="max-w-2xl xl:max-w-none z-10 drop-shadow-[0_0_50px_lightgray]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-10 text-black-shadow font-merienda">Ecosystem</h1>
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-4 text-black">
          <EcosystemItemBlock
            title={"collect NFTs"}
            description={"Collectible Catboy cards are fun and unique for any fan."}
            imageSrc={"/static/catboy_key.png"}
          />
          <EcosystemItemBlock
            title={"MARKETPLACE"}
            description={"Provides an innovative way to buy and sell your collectible NFTs"}
            imageSrc={"/static/catboy_key.png"}
          />
          <EcosystemItemBlock
            title={"STAKING"}
            description={"Stake your tokens here!"}
            imageSrc={"/static/catboy_key.png"}
          />
          <EcosystemItemBlock
            title={"BATTLE GAME"}
            description={
              "Join Catboy on an epic adventure in our new battle game! Discover your NFTs powerful abilities against the enemies. Are you ready to see your opponents? Join the fight with Catboy now!"
            }
            imageSrc={"/static/catboy_key.png"}
          />
          <EcosystemItemBlock
            title={"CHIBIS RAFFLE"}
            description={
              "Winning a Chibis raffle gives you a chance to win amazing mystery prizes."
            }
            imageSrc={"/static/catboy_key.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default FirstBanner;
