import Image from "next/image";

function EcosystemItemBlock({ title, description, imageSrc }) {
  return (
    <div className="p-3 flex-1 flex flex-col bg-gray-100/90 rounded-xl border-4 border-gray-300">
      <div className="mx-auto relative">
        <Image className="-translate-y-12 -mb-12" src={imageSrc} width={100} height={100} alt="icons of the Ecoystem" />
      </div>
      <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-purple-900">{title}</h2>
      <div className="flex-1 p-3">
        <p className="lowercase">{description}</p>
      </div>
    </div>
  );
}

export default EcosystemItemBlock;
