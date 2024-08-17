const ChartBadgeColor = ({ text, color }: { text: string; color: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`bg-${color} rounded-md w-4 h-4`} />
      <span className="text-small">{text}</span>
    </div>
  );
};

export default ChartBadgeColor;
