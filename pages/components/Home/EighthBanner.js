import Image from "next/image";

function EighthBanner() {
  return (
    <div className="min-w-screen min-h-screen text-center p-3 sm:p-6 relative">
      <Image
        src="/static/sparkly_background.png"
        className="object-cover object-left-bottom z-0"
        fill
        priority
      />
      {/* Linear Gradient Cover */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-900 to-purple-900/20 z-0"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-purple-900 to-purple-900/20 z-0"></div>

      <Image
        className="absolute bottom-0 left-0 z-10"
        src="/static/kid_with_short_arms.png"
        width={400}
        height={800}
      />
      <div className="max-w-2xl sm:min-h-[500px] z-20 relative mx-auto">
        <div className="py-4 px-12 bg-blue-800 rounded-full mb-10">
          <h1 className="text-base font-black sm:text-xl md:text-2xl">Be a Catboy Affiliater!</h1>
        </div>
        <div className="sm:absolute sm:right-2 xl:right-0 xl:left-0 bottom-0">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-10 font-merienda text-black-shadow italic whitespace-pre-wrap">
            {"Follow\n- US -"}
          </h2>
          <div className="flex justify-center gap-2">
            <div>
              <Image src="/static/logos/twitter_logo.png" width={75} height={75} />
            </div>
            <div>
              <Image src="/static/logos/instagram_logo.png" width={75} height={75} />
            </div>
            <div>
              <Image src="/static/logos/tg_logo.png" width={75} height={75} />
            </div>
            <div>
              <Image src="/static/logos/tiktok_logo.png" width={75} height={75} />
            </div>
            <div>
              <Image src="/static/logos/youtube_logo.png" width={75} height={75} />
            </div>
            <div>
              <Image src="/static/logos/discord_logo.png" width={75} height={75} />
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Notice */}
      <div className="absolute bottom-1 left-0 right-0 mx-auto z-50">
        <p className="text-sm text-gray-200">*Copyright Catboy 2023</p>
      </div>
    </div>
  );
}

export default EighthBanner;
