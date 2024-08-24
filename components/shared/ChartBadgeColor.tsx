const ChartBadgeColor = ({ text, color }: { text: string; color: string }) => {
  return (
    <div className="flex items-center gap-1">
      <div className={`bg-${color} rounded-full w-3 h-3`} />
      <span className="text-[12px]">{text}</span>
    </div>
  );
};

export default ChartBadgeColor;
