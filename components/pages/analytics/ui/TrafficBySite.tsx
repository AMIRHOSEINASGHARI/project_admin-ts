// cmp
import { Google, Instagram, Twitter, Youtube } from "@/components/svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    icon: <Google />,
    mediaName: "Google",
    value: "9.12k",
    iconColor: "text-[#eab308]",
  },
  {
    icon: <Twitter />,
    mediaName: "Twitter",
    value: "1.95k",
    iconColor: "text-[#3b82f6]",
  },
  {
    icon: <Youtube />,
    mediaName: "Youtube",
    value: "6.98k",
    iconColor: "text-[#f43f5e]",
  },
  {
    icon: <Instagram />,
    mediaName: "Instagram",
    value: "8.49k",
    iconColor: "text-[#d946ef]",
  },
];

const TrafficBySite = () => {
  return (
    <Card className="xl:w-[30%]">
      <CardHeader>
        <CardTitle>Traffic by site</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {data.map((item) => (
          <div
            key={item.mediaName}
            className="flex flex-col items-center gap-2 border border-light2 dark:border-dark3 p-4 rounded-xl"
          >
            <div className={`text-large ${item.iconColor}`}>{item.icon}</div>
            <span className="bold-value-2">{item.value}</span>
            <span className="text-small">{item.mediaName}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrafficBySite;
