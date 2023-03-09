import Image from "next/image";

function MysteryBoxItemBlock({ name, imageSrc }) {
  return (
    <div className="w-40 mx-auto text-black font-semibold drop-shadow-lg drop row-span-1 col-span-1">
      <h2>{name}</h2>
      <Image className="mx-auto" src={imageSrc} width={100} height={100} />
    </div>
  );
}

export default MysteryBoxItemBlock;
