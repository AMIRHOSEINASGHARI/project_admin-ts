// next
import { Metadata } from "next";
// cmp
import CreateUserPage from "@/components/pages/management/user/create/CreateUserPage";

export const metadata: Metadata = {
  title: "Create a new user",
};

const CreateUser = () => {
  return <CreateUserPage />;
};

export default CreateUser;
