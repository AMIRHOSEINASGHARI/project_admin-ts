// react
import { Suspense } from "react";
// types
import { UsersListParams } from "@/types/admin";
// constants
import { usersPageQueries } from "@/constants";
// cmp
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserStatusTabs from "./UserStatusTabs";
import View from "@/components/shared/layout/View";
import SearchUser from "./SearchUser";
import SearchUserByRole from "./SearchUserByRole";
import LoaderBar from "@/components/shared/LoaderBar";
import UserListTable from "./UserListTable";
import DeletePageQueries from "@/components/shared/DeletePageQueries";

const UserList = async (props: { searchParams: Promise<UsersListParams> }) => {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const role = searchParams?.role || "";
  const status = searchParams?.status || "";

  const tableHeads = ["Name", "Phone number", "Company", "Role", "Status", ""];

  return (
    <div className="tableContainer">
      <div className="space-y-4">
        <UserStatusTabs />
        <View variant="flex-gap" className="px-4">
          <SearchUserByRole />
          <SearchUser />
        </View>
        <div className="px-4">
          <DeletePageQueries filters={usersPageQueries} />
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              {tableHeads.map((head) => (
                <TableHead key={head}>{head}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <Suspense
              key={search + role + status}
              fallback={
                <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
                  <TableCell
                    colSpan={tableHeads.length}
                    className="px-[10vw] py-[10vh]"
                  >
                    <LoaderBar />
                  </TableCell>
                </TableRow>
              }
            >
              <UserListTable searchParams={searchParams} />
            </Suspense>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
