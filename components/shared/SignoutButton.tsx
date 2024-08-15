"use client";

import { signOut } from "@/actions/auth";
// cmp
import { Button } from "../ui/button";

const SignoutButton = ({
  title,
  variant,
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
}) => {
  return (
    <Button onClick={() => signOut()} variant={variant}>
      {title}
    </Button>
  );
};

export default SignoutButton;
