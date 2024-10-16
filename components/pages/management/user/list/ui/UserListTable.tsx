"use client";

// next
import Link from "next/link";
// types
import { AdminType } from "@/types/admin";
// constants
import { images } from "@/constants";
// icons
import {
  SolarOverflowMenuVertical,
  SolarPenBoldDuotone,
} from "@/components/svg";
// cmp
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserStatusTabs from "./UserStatusTabs";
import View from "@/components/shared/layout/View";
import SearchUser from "./SearchUser";
import SearchUserByRole from "./SearchUserByRole";
import UserPagination from "./UserPagination";
import TableActions from "./TableActions";

const UserListTable = ({ admins }: { admins: AdminType[] }) => {
  if (admins?.length === 0) return "no data";

  const tableHeads = ["Name", "Phone number", "Company", "Role", "Status", ""];

  const tableRows = admins?.map((admin: AdminType) => ({
    key: admin?._id,
    name: (
      <Link
        href={`/user/${admin?._id}/edit`}
        className="flex items-center gap-5"
      >
        <Avatar>
          <AvatarImage src={admin?.avatar || images.admin} />
          <AvatarFallback>{admin?.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-small font-medium hover:underline line-clamp-1">
            {admin?.name}
          </span>
          <span className="text-small text-[var(--text-disabled)] line-clamp-1">
            {admin?.email}
          </span>
        </div>
      </Link>
    ),
    phoneNumber: admin?.phoneNumber || "_",
    company: admin?.company || "_",
    role: admin?.role || "_",
    status: (
      <Badge
        variant={
          admin?.status === "Active"
            ? "green"
            : admin?.status === "Banned"
            ? "rose"
            : admin?.status === "Pending"
            ? "orange"
            : "gray"
        }
      >
        {admin?.status || "_"}
      </Badge>
    ),
    actions: <TableActions id={admin?._id} status={admin?.status} />,
  }));

  return (
    <div className="tableContainer">
      <div className="space-y-4">
        <UserStatusTabs admins={admins} />
        <View variant="flex-gap" className="px-4">
          <SearchUserByRole />
          <SearchUser />
        </View>
        <Table className="border-b border-dashed border-border-light dark:border-border-dark">
          <TableHeader>
            <TableRow className="border-none">
              {tableHeads.map((head) => (
                <TableHead key={head}>{head}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows.map((item) => (
              <TableRow key={item.key}>
                <TableCell className="min-w-[300px]">{item.name}</TableCell>
                <TableCell className="min-w-[200px]">
                  {item.phoneNumber}
                </TableCell>
                <TableCell className="min-w-[200px]">{item.company}</TableCell>
                <TableCell className="min-w-[180px]">{item.role}</TableCell>
                <TableCell className="min-w-[100px]">{item.status}</TableCell>
                <TableCell className="min-w-[100px]">{item.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <UserPagination />
    </div>
  );
};

export default UserListTable;
