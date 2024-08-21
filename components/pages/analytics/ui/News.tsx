// next
import Image from "next/image";
// constants
import { images } from "@/constants";
// cmp
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// icons
import { AngleRightRegular } from "@/components/svg";
import CardAttatchmentButton from "@/components/shared/CardAttatchmentButton";

const data = [
  {
    id: "1",
    date: "an hour",
    image: images.admin,
    title: "The Future of Renewable Energy: Innovations and Challenges Ahead",
    description:
      "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
  },
  {
    id: "2",
    date: "a day",
    image: images.admin2,
    title:
      "Exploring the Impact of Artificial Intelligence on Modern Healthcare",
    description:
      "She eagerly opened the gift, her eyes sparkling with excitement.",
  },
  {
    id: "3",
    date: "2 days",
    image: images.admin3,
    title: "Climate Change and Its Effects on Global Food Security",
    description:
      "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
  },
  {
    id: "4",
    date: "3 days",
    image: images.admin,
    title: "The Rise of Remote Work: Benefits, Challenges, and Future Trends",
    description:
      "The aroma of freshly brewed coffee filled the air, awakening my senses.",
  },
];

const News = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>News</CardTitle>
      </CardHeader>
      <Table>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-transparent dark:hover:bg-transparent"
            >
              <TableCell className="flex items-center gap-3 min-w-[600px]">
                <Image
                  src={item.image}
                  width={150}
                  height={150}
                  priority
                  alt="image"
                  className="rounded-2xl w-[50px] h-[50px]"
                />
                <div>
                  <p className="font-medium text-small">{item.title}</p>
                  <p className="text-small text-slate-400">
                    {item.description}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-right text-small text-slate-400">
                {item.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end w-full">
        <CardAttatchmentButton />
      </div>
    </Card>
  );
};

export default News;
