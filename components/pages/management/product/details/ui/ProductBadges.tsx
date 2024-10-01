// icons
import { CheckFill, ClockFill, ShieldFill } from "@/components/svg";

const badges = [
  {
    icon: <CheckFill />,
    title: "100% original",
    text: "Chocolate bar candy canes ice cream toffee cookie halvah.",
  },
  {
    icon: <ClockFill />,
    title: "10 days replacement",
    text: "Marshmallow biscuit donut dragée fruitcake wafer.",
  },
  {
    icon: <ShieldFill />,
    title: "Year warranty",
    text: "Cotton candy gingerbread cake I love sugar sweet.",
  },
];

const ProductBadges = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {badges.map((badge) => (
        <div
          key={badge.title}
          className="flex flex-col items-center gap-5 text-center w-full col-span-3 lg:col-span-1"
        >
          <div className="text-primary-1 text-3xl">{badge.icon}</div>
          <h6 className="bold-value-3">{badge.title}</h6>
          <p className="card_description">{badge.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductBadges;
