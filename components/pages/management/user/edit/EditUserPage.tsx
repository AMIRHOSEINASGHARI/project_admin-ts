// next
import Link from "next/link";
// utils
import { getServerSession } from "@/utils/session";
// cmp
import { Button } from "@/components/ui/button";

const EditUserPage = ({ id }: { id: string }) => {
  const session = getServerSession();

  if (id === session?.userId) {
    return (
      <div>
        If you want to edit your profile data, go to{" "}
        <Button
          asChild
          variant="action"
          className="text-blue-500 hover:bg-transparent dark:hover:bg-transparent hover:underline"
        >
          <Link href="/user/account">Account page</Link>
        </Button>
      </div>
    );
  }

  return <div>EditUserPage {id}</div>;
};

export default EditUserPage;
