import Image from "next/image";

function MysteryBoxItemBlock({ name, imageSrc }) {
  return (
    <div className="w-40 mx-auto font-semibold drop-shadow-lg drop row-span-1 col-span-1 gap-1 flex-1">
      <h2 className="text-black-shadow text-sm mb-2">{name}</h2>
      <div className="rounded-lg py-2 border-2 border-[#1358af]" style={{"background": "radial-gradient(#3b96e2, #1358af)"}}>
        <Image className="mx-auto" src={imageSrc} width={100} height={100} alt="mystery box icons"/>
      </div>
    </div>
  );
}

export default MysteryBoxItemBlock;
