// actions
import { upcommingEvents } from "@/actions/task";
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
import moment from "moment";

const UpcommingEvents = async () => {
  const data = await upcommingEvents();

  const tableHeads = ["Date", "Title", "Status"];

  const tableRows = data?.tasks?.map((event) => ({
    key: event?._id,
    date: moment(event?.createdAt).format("MMM Do"),
    title: event?.title,
    status: (
      <Badge
        variant={
          event?.status === "Done"
            ? "green"
            : event?.status === "Progress"
            ? "orange"
            : "gray"
        }
      >
        {event?.status}
      </Badge>
    ),
  }));

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
            {tableRows.map((item) => (
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
