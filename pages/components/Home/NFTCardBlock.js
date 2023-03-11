import { useRef, useEffect } from "react";
import Image from "next/image";

function NFTCardBlock({ nftObj, i, setSelected, setSelectedDivRef, selectedDivRef }) {
  const mainDivRef = useRef();
  const prevSelected = useRef(null);

  const select = () => {
    if (mainDivRef !== selectedDivRef) {
      mainDivRef.current.style.transform = "scale(1.1)";
      setSelected((prev) => {
        if (prev) prevSelected.current = prev;

        return i;
      });
      setSelectedDivRef((prev) => {
        prev.current.style.transform = "scale(1)";
        return mainDivRef;
      });
    }
  };

  const hoverOn = () => {
    if (mainDivRef !== selectedDivRef) {
      mainDivRef.current.style.transform = "scale(1.1)";
      setSelected((prev) => {
        if (prev) prevSelected.current = prev;

        return i;
      });
      selectedDivRef.current.style.transform = "scale(1)";
    }
  };

  const hoverOff = () => {
    if (mainDivRef !== selectedDivRef) {
      setSelectedDivRef(mainDivRef);
    }
  };

  useEffect(() => {
    if (i === 1) {
      mainDivRef.current.style.transform = "scale(1.1)";
      setSelected(i);
      setSelectedDivRef(mainDivRef);
    }
  }, [i]);

  return (
    <div
      className={`p-1 z-0 relative rounded-md`}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      style={{ backgroundColor: nftObj?.bgColor }}
      onClick={select}
      ref={mainDivRef}
    >
      <Image src={nftObj?.imageSrc} width={200} height={300} alt="NFT card background" />
      <h2 className="text-xs sm:text-sm ld:text-lg font-bold capitalize">{nftObj?.rarity}</h2>
    </div>
  );
}

export default NFTCardBlock;
