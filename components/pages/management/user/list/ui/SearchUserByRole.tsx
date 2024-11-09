"use client";

// react
import { useEffect, useState } from "react";
// hooks
import { useHandleSearchParams } from "@/hooks";
// debounce
import { useDebouncedCallback } from "use-debounce";
// cmp
import { Input } from "@/components/ui/input";

const SearchUserByRole = () => {
  const { handleSetQuery, searchParams } = useHandleSearchParams("role");
  const [role, setRole] = useState(searchParams.get("role")?.toString() || "");

  const handleRole = useDebouncedCallback((term: string) => {
    handleSetQuery(term);
  }, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!params.has("role")) {
      setRole("");
    } else {
      setRole(searchParams.get("role")?.toString()!);
    }
  }, [searchParams]);

  return (
    <Input
      placeholder="Role"
      value={role}
      onChange={(e) => {
        setRole(() => e.target.value);
        handleRole(e.target.value);
      }}
      className="w-full xl:w-[30%]"
    />
  );
};

export default SearchUserByRole;
