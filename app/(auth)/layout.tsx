// next
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";
// cmp
import AuthPageHeader from "@/components/pages/auth/ui/AuthPageHeader";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession();

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      <AuthPageHeader />
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
