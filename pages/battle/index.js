import Image from "next/image";
import NavigationBar from "../components/NavigationBar";

function index() {
  return (
    <div className="min-w-screen min-h-screen grid place-items-center text-center py-20 px-3 sm:px-6 relative text-white">
      <Image
        src="/static/battle.svg"
        className="object-cover object-top"
        fill
        priority
        alt="Battle page background image"
      />
      {/* Linear Gradient Cover */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-900 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 to-purple-900/20"></div> */}

      <NavigationBar />

      <Image
        src="/static/CatboyBattleGraphic.png"
        className="absolute top-0 right-0 z-0 w-auto"
        alt="battle graphic"
        width={300}
        height={300}
      />
      <Image
        src="/static/CatboyBattleGraphic2.png"
        className="absolute bottom-0 right-0 z-0 w-auto"
        alt="battle graphic"
        width={300}
        height={300}
      />

      <div className="w-full h-full p-3 sm:p-10 z-20 grid grid-cols-1 sm:grid-cols-1 max-w-2xl grid-rows-1 gap-10 bg-gray-900/60 rounded-lg">
        <div className="relative z-20 flex flex-col gap-6 text-left items-start">
          <div>
            <h1 className="uppercase font-black text-lg text-black-shadow leading-none">
              Battle of the catboys are you ready to be a legend?
            </h1>
            <p className="text-gray-200 text-xs mb-6">
              Pick your NFT character and get ready to fight! Dueling against your opponent. Bet and
              win!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex bg-purple-800 p-4 rounded-xl border-4 border-gray-300">
                <Image src="/static/powerelixir.png" width={75} height={75} alt="power elixir" />
                <div className="flex-1">
                  <h2 className="font-bold font-merienda uppercase">Power Elixir</h2>
                  <p className="text-gray-200 text-xs">
                    This elixir will make you 50% more powerful. Use it wisely.
                  </p>
                </div>
              </div>
              <div className="flex bg-purple-800 p-4 rounded-xl border-4 border-gray-300">
                <Image src="/static/replay_potion.png" width={75} height={75} alt="replay potion" />
                <div>
                  <h2 className="font-bold font-merienda uppercase">Replay Potion</h2>
                  <p className="text-gray-200 text-xs">
                    A second round? Drink this potion and you can play again!.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-center">
            <button className="w-full border-2 border-yellow-400 rounded-full py-2 text-yellow-400 font-bold bg-gradient-to-b from-purple-900 to-purple-700 hover:to-purple-600 mx-auto">
              PLAY NOW
            </button>
          </div>
          <div>
            <div>
              <h1 className="uppercase font-black text-lg text-black-shadow leading-none">
                Gameplay:
              </h1>
              <h2 className="font-black text-lg leading-none mb-6">Battle of the Catboys</h2>
              <p className="text-gray-200 text-xs mb-6">
                Welcome to the ultimate catboy battle where skill will be essential for victory!
                Choose your mighty catboy NFT and face off against other contenders in thrilling
                arena battles! So, step into the arena and prove yourself worthy of being the top
                Catboy warrior! The game battle system will be put to your Catboys to the test!
                Fights outcomes are on their power and rarity. You will be able to spend $CATBOY to
                fight.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-10 mb-6">
                <div className="flex bg-purple-800 p-4 rounded-xl border-4 border-gray-300 drop-shadow-[0_0_50px_lightgray]">
                  <p className="leading-tight text-sm font-gray-200 text-black-shadow">
                    Select your Catboy NFT you want to take to the battle. Buy a ticket to enter the
                    Arena.
                  </p>
                </div>
                <div className="flex bg-purple-800 p-4 rounded-xl border-4 border-gray-300 drop-shadow-[0_0_50px_lightgray]">
                  <p className="leading-tight text-sm font-gray-200 text-black-shadow">
                    Once in the battle arena, you input the amount of $CATBOY tokens you want to bet
                    with.
                  </p>
                </div>
                <div className="flex bg-purple-800 p-4 rounded-xl border-4 border-gray-300 drop-shadow-[0_0_50px_lightgray]">
                  <p className="leading-tight text-sm font-gray-200 text-black-shadow">
                    You fight a generated enemy. You see your opponent in the arena. To increase
                    your chances to win, you can buy a power potion!
                  </p>
                </div>
                <div className="flex bg-purple-800 p-4 rounded-xl border-4 border-gray-300 drop-shadow-[0_0_50px_lightgray]">
                  <p className="leading-tight text-sm font-gray-200 text-black-shadow">
                    Ready to battle? BY pressing the fight button, you see immediately if you won or
                    lost.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mx-auto sm:px-12">
                  <Image
                    src="/static/winner.png"
                    className="w-auto"
                    height={200}
                    width={400}
                    alt="winner"
                  />
                </div>
                <div>
                  <p className="text-xs font-gray-300 leading-none sm:px-12">
                    Winner will get their $CATBOY tokens back that they put in the bet + a % of the
                    tokens of his total. Your rewarded tokens are instantly credited to your wallet.
                  </p>
                </div>
                <div className="mx-auto sm:px-12">
                  <Image
                    src="/static/loser.png"
                    className="w-auto"
                    height={200}
                    width={400}
                    alt="loser"
                  />
                </div>
                <div>
                  <p className="text-xs font-gray-300 leading-none sm:px-12">
                    If you lose the fight, that&apos;s the end your tokens will be added to the game
                    pool and you leave the arena with your NFT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
