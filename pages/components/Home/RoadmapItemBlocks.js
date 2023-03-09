function RoadmapItemBlocks({ title }) {
  return (
    <div className="border-2 border-yellow-500 rounded-full py-4 px-3 bg-gradient-to-b from-purple-800 to-purple-600 shadow-md">
      <p className="font-bold text-sm lg:text-lg">{title}</p>
    </div>
  );
}

export default RoadmapItemBlocks;
