// cmp
import CardAttatchmentButton from "@/components/shared/CardAttatchmentButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const NewInvoices = () => {
  const tableHeads = ["Invoice ID", "Category", "Price", "Status"];

  const tableRows = [
    {
      key: 1,
      invoiceID: "INV-1990",
      category: "Android",
      price: "$83.74",
      status: <Badge variant="green">Paid</Badge>,
    },
    {
      key: 2,
      invoiceID: "INV-1991",
      category: "Mac",
      price: "$97.14",
      status: <Badge variant="green">Paid</Badge>,
    },
    {
      key: 3,
      invoiceID: "INV-1992",
      category: "Windows",
      price: "$68.71",
      status: <Badge variant="orange">Progress</Badge>,
    },
    {
      key: 4,
      invoiceID: "INV-1993",
      category: "Android",
      price: "$85.21",
      status: <Badge variant="orange">Progress</Badge>,
    },
    {
      key: 5,
      invoiceID: "INV-1994",
      category: "Mac",
      price: "$52.17",
      status: <Badge variant="green">Paid</Badge>,
    },
  ];

  return (
    <div className="w-full tableContainer h-fit">
      <CardHeader className="px-card pt-card">
        <CardTitle>New Invoices</CardTitle>
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
            {tableRows.map((item) => (
              <TableRow
                key={item.invoiceID}
                className="hover:bg-transparent dark:hover:bg-transparent"
              >
                <TableCell className="min-w-[100px]">
                  {item.invoiceID}
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.status}</TableCell>
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

export default NewInvoices;
