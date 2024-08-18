// cmp
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// icons
import { MenuDotsVerticalRegular } from "@/components/svg";

const data = [
  {
    id: "1",
    text: "Prepare Monthly Financial Report",
  },
  {
    id: "2",
    text: "Design New Marketing Campaign",
  },
  {
    id: "3",
    text: "Analyze Customer Feedback",
  },
  {
    id: "4",
    text: "Update Website Content",
  },
  {
    id: "5",
    text: "Conduct Market Research",
  },
];

const Tasks = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <Table>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-transparent dark:hover:bg-transparent"
            >
              <TableCell className="min-w-[300px]">
                <p className="font-medium">{item.text}</p>
              </TableCell>
              <TableCell className="text-right p-0 px-2">
                <Button variant="icon" className="text-small">
                  <MenuDotsVerticalRegular />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Tasks;
