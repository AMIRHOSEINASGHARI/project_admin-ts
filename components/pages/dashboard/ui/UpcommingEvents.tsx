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
    <Card className="w-full h-fit">
      <CardHeader>
        <CardTitle>Upcomming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {tableHeads.map((head) => (
                <TableHead key={head}>{head}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows?.map((item) => (
              <TableRow key={item.key}>
                <TableCell className="min-w-[100px]">{item.date}</TableCell>
                <TableCell className="min-w-[200px]">{item.title}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UpcommingEvents;
