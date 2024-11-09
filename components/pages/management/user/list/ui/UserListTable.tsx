// next
import Link from "next/link";
// types
import { AdminType, UsersListParams } from "@/types/admin";
// actions
import { getAdmins } from "@/actions/admin";
// utils
import { jsonParser } from "@/utils/functions";
// constants
import { images } from "@/constants";
// cmp
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TableActions from "./TableActions";
import NoData from "@/components/shared/NoData";

const UserListTable = async ({
  searchParams,
}: {
  searchParams: UsersListParams;
}) => {
  const data = await getAdmins(searchParams);

  if (data?.admins?.length === 0) {
    return (
      <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
        <TableCell colSpan={6} className="p-10">
          <NoData title="No users found!" />
        </TableCell>
      </TableRow>
    );
  }

  const tableRows = data?.admins?.map((admin: AdminType) => ({
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
    actions: (
      <TableActions
        id={jsonParser(admin?._id)}
        status={jsonParser(admin?.status)}
      />
    ),
  }));

  return (
    <>
      {tableRows.map((item) => (
        <TableRow key={item.key}>
          <TableCell className="min-w-[300px]">{item.name}</TableCell>
          <TableCell className="min-w-[200px]">{item.phoneNumber}</TableCell>
          <TableCell className="min-w-[200px]">{item.company}</TableCell>
          <TableCell className="min-w-[180px]">{item.role}</TableCell>
          <TableCell className="min-w-[100px]">{item.status}</TableCell>
          <TableCell className="min-w-[100px]">{item.actions}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default UserListTable;
