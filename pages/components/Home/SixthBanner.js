import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

function SixthBanner() {
  return (
    <div className="min-w-screen min-h-screen grid place-items-center uppercase text-center p-3 sm:p-6 relative">
      <Image
        src="/static/sparkly_background_flipped.svg"
        className="object-cover object-center z-0"
        fill
        priority
        alt="sparkly purple background"
      />
      {/* Linear Gradient Cover */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-900 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 to-purple-900/20"></div>
      <div className="max-w-2xl xl:max-w-none z-10">
        <div>
          <h1 className="mb-10 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-black-shadow font-merienda">
            Find us on
          </h1>
          <div className="flex gap-6">
            <Image src="/static/logos/bnb_logo.png" width={75} height={75} alt="bnb logo" />
            <Image src="/static/logos/cmc_logo.png" width={75} height={75} alt="coinmarketcap logo" />
            <Image src="/static/logos/coingecko_logo.png" width={75} height={75} alt="coingecko logo" />
            <Image src="/static/logos/pcs_logo.png" width={75} height={75} alt="pancakeswap logo" />
            <Image src="/static/logos/dextools_logo.png" width={75} height={75} alt="dextools logo" />
          </div>
        </div>
      </div>
      <div className="w-screen absolute bottom-0">
        <h2 className="mb-10 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-black-shadow">
          Featured on
        </h2>
        <div className="bg-amber-50 py-10">
          <Marquee className="bg-amber-100 py-3" gradient={false}>
            <div className="px-10 lg:px-24">
              <Link
                href="https://www.benzinga.com/markets/cryptocurrency/22/03/26196149/step-aside-dogecoin-knockoffs-this-cat-coin-is-stealing-the-limelight-with-a-642-spike-thi"
                target="_blank"
              >
                <Image src="/static/logos/Benzinga_logo.png" width={75} height={75} alt="benzinga logo" />
              </Link>
            </div>
            <div className="px-10 lg:px-24">
              <Link
                href="https://www.bitcoininsider.org/article/154829/catboy-token-now-available-pancakeswap-announces-new-staking-and-marketplace"
                target="_blank"
              >
                <Image src="/static/logos/bitcoin_insider_logo.png" width={75} height={75} alt="bitcoin insider logo" />
              </Link>
            </div>
            <div className="px-10 lg:px-24">
              <Link
                href="https://www.bloomberg.com/press-releases/2022-03-19/catboy-token-now-available-on-pancakeswap-announces-new-staking-and-marketplace-functions-with-18-different-nfts-in-mystery"
                target="_blank"
              >
                <Image src="/static/logos/bloomberg_logo.png" width={75} height={75} alt="bloomberg logo" />
              </Link>
            </div>
            <div className="px-10 lg:px-24">
              <Link
                href="https://finance.yahoo.com/news/catboy-token-now-available-pancakeswap-171100173.html"
                target="_blank"
              >
                <Image src="/static/logos/yahoo_logo.png" width={75} height={75} alt="yahoo logo" />
              </Link>
            </div>
            <div className="px-10 lg:px-24">
              <Link
                href="https://www.nasdaq.com/press-release/catboy-token-now-available-on-pancakeswap-announces-new-staking-and-marketplace"
                target="_blank"
              >
                <Image src="/static/logos/nasdaq_logo.png" width={75} height={75} alt="nasdaq logo" />
              </Link>
            </div>
            <div className="px-10 lg:px-24">
              <Link
                href="https://www.benzinga.com/markets/cryptocurrency/22/03/26196149/step-aside-dogecoin-knockoffs-this-cat-coin-is-stealing-the-limelight-with-a-642-spike-thi"
                target="_blank"
              >
                <Image src="/static/logos/Benzinga_logo.png" width={75} height={75} alt="benzinga logo" />
              </Link>
            </div>
            <div className="px-10 lg:px-24">
              <Link
                href="https://www.bitcoininsider.org/article/154829/catboy-token-now-available-pancakeswap-announces-new-staking-and-marketplace"
                target="_blank"
              >
                <Image src="/static/logos/bitcoin_insider_logo.png" width={75} height={75} alt="bitcoin insider logo" />
              </Link>
            </div>
            <div className="px-10 lg:px-24">
              <Link
                href="https://www.bloomberg.com/press-releases/2022-03-19/catboy-token-now-available-on-pancakeswap-announces-new-staking-and-marketplace-functions-with-18-different-nfts-in-mystery"
                target="_blank"
              >
                <Image src="/static/logos/bloomberg_logo.png" width={75} height={75} alt="bloomberg logo" />
              </Link>
            </div>
            <div className="px-10 lg:px-24">
              <Link
                href="https://finance.yahoo.com/news/catboy-token-now-available-pancakeswap-171100173.html"
                target="_blank"
              >
                <Image src="/static/logos/yahoo_logo.png" width={75} height={75} alt="yahoo logo" />
              </Link>
            </div>
            <div className="px-10 lg:px-24">
              <Link
                href="https://www.nasdaq.com/press-release/catboy-token-now-available-on-pancakeswap-announces-new-staking-and-marketplace"
                target="_blank"
              >
                <Image src="/static/logos/nasdaq_logo.png" width={75} height={75} alt="nasdaq logo" />
              </Link>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default SixthBanner;
