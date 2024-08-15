"use client";

import { signOut } from "@/actions/auth";
// cmp
import { Button } from "../ui/button";

const SignoutButton = ({
  title,
  variant,
  classNames,
}: {
  title: JSX.Element | string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "icon"
    | null
    | undefined;
  classNames?: string;
}) => {
  return (
    <Button
      onClick={() => signOut()}
      variant={variant}
      className={classNames || ""}
    >
      {title}
    </Button>
  );
};

export default SignoutButton;
