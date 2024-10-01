// next
import Image from "next/image";
// constants
import { bestSalesman_data } from "@/constants";
// cmp
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BestSalesman = () => {
  const tableHeads = ["Seller", "Product", "Country", "Total"];

  const tableRows = bestSalesman_data.map((item) => ({
    key: item.id,
    image: (
      <Image
        src={item.image}
        width={100}
        height={100}
        alt="seller"
        priority
        className="w-[40px] h-[40px] rounded-full"
      />
    ),
    name: item.name,
    product: item.product,
    country: (
      <Image
        src={item.country}
        width={100}
        height={100}
        alt="seller"
        priority
        className="w-[30px] h-[30px]"
      />
    ),
    total: <span>${item.total}</span>,
  }));

  return (
    <div className="tableContainer w-full h-fit">
      <CardHeader className="px-card pt-card">
        <CardTitle>Best salesman</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              {tableHeads.map((head) => (
                <TableHead key={head}>{head}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows?.map((item) => (
              <TableRow key={item.key}>
                <TableCell className="min-w-[180px] flex items-center gap-4">
                  {item.image} <span>{item.name}</span>
                </TableCell>
                <TableCell className="min-w-[125px]">{item.product}</TableCell>
                <TableCell className="min-w-[100px]">{item.country}</TableCell>
                <TableCell className="min-w-[100px]">{item.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </div>
  );
};

export default BestSalesman;
