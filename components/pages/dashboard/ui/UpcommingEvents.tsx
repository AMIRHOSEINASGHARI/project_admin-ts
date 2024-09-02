// actions
import { upcommingEvents } from "@/actions/task";
// types
import { TaskType } from "@/types/task";
// cmp
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import moment from "moment";
import { AlertCircle } from "lucide-react";
import clsx from "clsx";

type TableRowType = {
  key: string;
  date: string;
  title: string;
  status: JSX.Element;
};

const UpcommingEvents = async () => {
  const data = await upcommingEvents();

  if (data?.code !== 200) {
    return (
      <Card className="w-full min-h-full">
        <CardHeader>
          <CardTitle>Upcomming Events</CardTitle>
        </CardHeader>
        <div className="w-full h-full flex flex-col justify-center">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{data?.message}</AlertDescription>
          </Alert>
        </div>
      </Card>
    );
  }

  const tableHeads = ["Date", "Title", "Status"];

  const tableRows: TableRowType[] | undefined = data?.tasks?.map(
    (task: TaskType) => ({
      key: task?._id,
      date: moment(task?.createdAt).format("MMM Do"),
      title: task?.title,
      status: (
        <Badge
          variant={
            task?.status === "Done"
              ? "green"
              : task?.status === "Progress"
              ? "orange"
              : "gray"
          }
        >
          {task?.status}
        </Badge>
      ),
    })
  );

  return (
    <div className="w-full tableContainer h-fit">
      <CardHeader className="px-card pt-card">
        <CardTitle>Upcomming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="border-b dark:border-dark3">
          <TableHeader>
            <TableRow className="border-none">
              {tableHeads.map((head) => (
                <TableHead key={head}>{head}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows?.map((item, index) => (
              <TableRow
                key={item.key}
                className={clsx(
                  "hover:bg-transparent dark:hover:bg-transparent",
                  {
                    "border-none": tableRows?.length - 1 === index,
                  }
                )}
              >
                <TableCell className="min-w-[100px]">{item.date}</TableCell>
                <TableCell className="min-w-[200px]">{item.title}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </div>
  );
};

export default UpcommingEvents;
