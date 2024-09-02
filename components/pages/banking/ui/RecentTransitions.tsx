// next
import Image from "next/image";
// types
import { RecentTransitionsTableData } from "@/types/shared";
// constants
import { images } from "@/constants";
// cmp
import {
  AngleRightRegular,
  ArrowTrendDownRegular,
  ArrowTrendUpRegular,
} from "@/components/svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge";
import CardAttatchmentButton from "@/components/shared/CardAttatchmentButton";

const RecentTransitions = () => {
  const tableHeads = ["Description", "Date", "Amount", "Status"];

  const data: RecentTransitionsTableData[] = [
    {
      id: "1",
      image: images.admin,
      type: "Receive money from",
      user: "Annette black",
      date: {
        date: "19 Aug 2024",
        hour: "2:18 pm",
      },
      amount: 68.71,
      status: "Progress",
    },
    {
      id: "2",
      image: images.admin2,
      type: "Payment for",
      user: "Courtney henry",
      date: {
        date: "18 Aug 2024",
        hour: "12:18 pm",
      },
      amount: 85.21,
      status: "Completed",
    },
    {
      id: "3",
      image: images.admin3,
      type: "Payment for",
      user: "Theresa webb",
      date: {
        date: "17 Aug 2024",
        hour: "1:18 pm",
      },
      amount: 52.17,
      status: "Failed",
    },
  ];

  const tableRows = data.map((item: RecentTransitionsTableData) => ({
    key: item.id,
    description: (
      <div className="flex items-center gap-4">
        <div className="relative w-fit h-fit">
          <Image
            src={item.image}
            width={100}
            height={100}
            alt="image"
            priority
            className="rounded-full w-[50px] h-[50px]"
          />
          <div
            className={clsx(
              "rounded-full text-white absolute -bottom-1 -right-1 p-1 text-small",
              {
                "bg-green-500": item.type === "Receive money from",
                "bg-rose-500": item.type === "Payment for",
              }
            )}
          >
            {item.type === "Receive money from" ? (
              <ArrowTrendDownRegular />
            ) : (
              <ArrowTrendUpRegular />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-small font-medium">{item.type}</span>
          <span className="text-small text-slate-500">{item.user}</span>
        </div>
      </div>
    ),
    date: (
      <div className="flex flex-col">
        <span className="text-small font-medium">{item.date.date}</span>
        <span className="text-x-small text-slate-500">{item.date.hour}</span>
      </div>
    ),
    amount: `$${item.amount}`,
    status: (
      <Badge
        variant={
          item.status === "Completed"
            ? "green"
            : item.status === "Failed"
            ? "orange"
            : "blue"
        }
      >
        {item.status}
      </Badge>
    ),
  }));

  return (
    <div className="w-full tableContainer h-fit">
      <CardHeader className="px-card pt-card">
        <CardTitle>Recent transitions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="border-b border-dashed dark:border-dark3">
          <TableHeader>
            <TableRow className="border-none">
              {tableHeads.map((head) => (
                <TableHead key={head}>{head}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows?.map((item) => (
              <TableRow
                key={item.key}
                className="hover:bg-transparent dark:hover:bg-transparent"
              >
                <TableCell className="min-w-[250px]">
                  {item.description}
                </TableCell>
                <TableCell className="min-w-[130px]">{item.date}</TableCell>
                <TableCell className="min-w-[100px]">{item.amount}</TableCell>
                <TableCell className="min-w-[100px]">{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <div className="w-full flex justify-end p-2">
        <CardAttatchmentButton />
      </div>
    </div>
  );
};

export default RecentTransitions;
