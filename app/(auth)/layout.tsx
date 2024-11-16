// next
import { redirect } from "next/navigation";
import { Metadata } from "next";
// utils
import { getServerSession } from "@/utils/session";
// cmp
import AuthPageHeader from "@/components/pages/auth/ui/AuthPageHeader";
import AuthPageBackground from "@/components/pages/auth/ui/AuthPageBackground";

export const metadata: Metadata = {
  title: "Login",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div>
      <AuthPageHeader />
      <AuthPageBackground />
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
