function EmptySpaceBanner({ type }) {
  return type === "main" ? (
    <div className="w-full h-32 bg-purple-900"></div>
  ) : (
    <div className="w-full h-4 sm:h-8 bg-[#fdf8f5]"></div>
  );
}

export default EmptySpaceBanner;
