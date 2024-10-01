// next
import Image from "next/image";
// constants
import { fakeUsers } from "@/mock/users";
// icons
import { SolarTransferHorizontalBoldDuotone } from "@/components/svg";
// cmp
import CardAttatchmentButton from "@/components/shared/CardAttatchmentButton";
import CustomTooltip from "@/components/shared/CustomTooltip";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Slice } from "lucide-react";

const Contacts = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center justify-between flex-wrap gap-3">
          <CardTitle>Contacts</CardTitle>
          <CardAttatchmentButton />
        </div>
        <CardDescription>You have 122 contacts</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {fakeUsers?.splice(0, 5).map((item) => (
              <TableRow
                key={item.name}
                className="p-0 border-none hover:bg-transparent dark:hover:bg-transparent"
              >
                <TableCell className="min-w-[280px] flex items-center gap-3 px-0">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="user"
                    priority
                    className="rounded-full w-[40px] h-[40px]"
                  />
                  <div className="flex flex-col">
                    <span className="text-small font-medium">{item.name}</span>
                    <span className="text-small text-slate-500">
                      {item.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-0">
                  <CustomTooltip
                    trigger={
                      <Button variant="icon">
                        <SolarTransferHorizontalBoldDuotone className="text-icon-size text-slate-500" />
                      </Button>
                    }
                    content="Quick transfer"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Contacts;
